import React, { useState, useEffect, useCallback } from 'react';
import { ArchCard } from './components/ArchCard';
import { Marquee } from './components/Marquee';
import { LanguageSelector } from './components/LanguageSelector';
import { DetailPage } from './components/DetailPage';
import { generateLuxuryQuote } from './services/geminiService';
import { translations, LanguageCode } from './translations';

// Constants
const TIMER_DURATION_SEC = 5 * 60; // 5 minutes
const STORAGE_KEY_TARGET = 'gucci_agenda_target';
const STORAGE_KEY_STATUS = 'gucci_agenda_status'; // 'IDLE', 'RUNNING', 'FINISHED'
const STORAGE_KEY_LANG = 'gucci_agenda_lang';

const BASE_AGENDA_ITEMS = [
  { 
    id: 'focus', 
    image: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRLP7Klm77lZxIy1IJJDbqvVW8iiOt_1yhN4iV0EE-0WjTCLanOxjJduLu3ZXl0Wg'
  },
  { 
    id: 'create', 
    image: 'https://media.gucci.com/dynamic/b3c8/pFot1oaC0klViZzH+JAW490G9LuwUwx8hFTQv0ibrD8d4j85DBbGuyMuVdFQaMcaiE6tF94Awn0FUHisVqOQhsXOqWya4UoNsAjcNrLXzl1a7qhYYlxkH1fzPI_OLJ2Poheo0n4GOC9EPMVgI_vciOEldCjA3L+o7NBKLZFQgLG0zZUe9r54wXNG9YeCZcgpbzVTPhEZkvEPIFLnBfBLZg==/16-9_4000x2250_9.png'
  },
  { 
    id: 'review', 
    image: 'https://media.gucci.com/dynamic/b3c8/hklAFidqdcZna8LBwb1Ox5XH9sJ6aSjJZCAm9Sm+uWtlhYCiW8X6kESYPIF50Gq4IbavTYmoPDDYYwPGfE9rAbfSz5UawKzRdqqZmgVo6zEBR3Xia5TDCRVt6ExdwYktoDk9D9Pk26CPRmhFOzHWfSlyqeY3PR229yPAk98_bdpeObZ1UaQFoaTLoJVyShqcZd10SP47raOI7ywp3X+22w==/16-9_4000x2250_12.png' 
  },
  { 
    id: 'rest', 
    image: 'https://media.gucci.com/dynamic/b3c8/rsEWOblEy0J+fKopcpDilLr_b0_OOl9VoifqhfbDMwrlep85ws6TDmVRlXLINevxb21siELfJAFoWwTOMzdYote9Wat+vAavr105iEXoiAkR7oz8joMMa8sy2ag+RFR4qUktHKwF0N8NtCDZsL6fFypFtIH+hQMXTizUcwFnsaO3lJhJNWFcgp_5nCQWwxaeXHFRtLhbG6wRvyactBeXWw==/16-9_4000x2250_7.png' 
  }
];

export default function App() {
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION_SEC);
  const [timerStatus, setTimerStatus] = useState<'IDLE' | 'RUNNING' | 'FINISHED'>('IDLE');
  const [selectedMode, setSelectedMode] = useState<string>('focus');
  const [quote, setQuote] = useState<string>("");
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguageCode>('id');
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Load language preference
  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY_LANG) as LanguageCode;
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: LanguageCode) => {
    setCurrentLang(lang);
    localStorage.setItem(STORAGE_KEY_LANG, lang);
  };

  // Get current translation object
  const t = translations[currentLang];
  
  // Construct Marquee Text
  const marqueeText = t.phrases.join(" • ");

  // Initialize timer state from local storage on mount
  useEffect(() => {
    const storedStatus = localStorage.getItem(STORAGE_KEY_STATUS);
    const storedTarget = localStorage.getItem(STORAGE_KEY_TARGET);

    if (storedStatus === 'FINISHED') {
      setTimerStatus('FINISHED');
      setTimeLeft(0);
    } else if (storedStatus === 'RUNNING' && storedTarget) {
      const targetTime = parseInt(storedTarget, 10);
      const now = Date.now();
      const remaining = Math.ceil((targetTime - now) / 1000);

      if (remaining > 0) {
        setTimerStatus('RUNNING');
        setTimeLeft(remaining);
      } else {
        handleTimerComplete();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer Tick Logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (timerStatus === 'RUNNING') {
      interval = setInterval(() => {
        const storedTarget = localStorage.getItem(STORAGE_KEY_TARGET);
        if (!storedTarget) return;

        const targetTime = parseInt(storedTarget, 10);
        const now = Date.now();
        const remaining = Math.ceil((targetTime - now) / 1000);

        if (remaining <= 0) {
          handleTimerComplete();
        } else {
          setTimeLeft(remaining);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerStatus]);

  const handleTimerComplete = useCallback(async () => {
    setTimerStatus('FINISHED');
    setTimeLeft(0);
    localStorage.setItem(STORAGE_KEY_STATUS, 'FINISHED');
    localStorage.removeItem(STORAGE_KEY_TARGET);
    
    // Fetch a quote on finish
    setIsLoadingQuote(true);
    const text = await generateLuxuryQuote('finish', currentLang);
    setQuote(text);
    setIsLoadingQuote(false);
  }, [currentLang]);

  const startTimer = useCallback(async () => {
    // Reset quote
    setQuote("");
    
    // Calculate Target
    const now = Date.now();
    const targetTime = now + TIMER_DURATION_SEC * 1000;

    // Save to storage
    localStorage.setItem(STORAGE_KEY_TARGET, targetTime.toString());
    localStorage.setItem(STORAGE_KEY_STATUS, 'RUNNING');

    // Update State
    setTimerStatus('RUNNING');
    setTimeLeft(TIMER_DURATION_SEC);

    // Optional: Fetch start quote
    setIsLoadingQuote(true);
    const text = await generateLuxuryQuote('start', currentLang);
    setQuote(text);
    setIsLoadingQuote(false);
  }, [currentLang]);

  const resetTimer = () => {
    setTimerStatus('IDLE');
    setTimeLeft(TIMER_DURATION_SEC);
    setQuote("");
    localStorage.removeItem(STORAGE_KEY_TARGET);
    localStorage.removeItem(STORAGE_KEY_STATUS);
  };

  // Helper to format time
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleDiscoverClick = (modeId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click logic
    setSelectedMode(modeId);
    setIsDetailOpen(true);
  };

  // Get currently selected item data for Detail Page
  const currentItem = BASE_AGENDA_ITEMS.find(item => item.id === selectedMode);
  const currentModeData = currentItem && t.modes[currentItem.id as keyof typeof t.modes];

  return (
    <div className={`min-h-screen flex flex-col bg-[#f6f5f1] ${currentLang === 'ar' ? 'rtl' : 'ltr'}`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="py-10 px-6 relative">
        <div className="absolute top-6 right-6 z-50">
           <LanguageSelector currentLang={currentLang} onLanguageChange={handleLanguageChange} />
        </div>
        
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl tracking-[0.2em] font-medium text-[#1a1a1a] mb-2">GUCCI</h1>
          <h2 className="text-sm md:text-base italic serif text-[#555] tracking-wide">{t.subtitle}</h2>
        </div>
      </header>

      {/* Marquee - Placed below header */}
      <Marquee text={marqueeText} />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16">
        
        {/* Timer Display Area */}
        <div className="flex flex-col items-center justify-center mb-24 relative min-h-[500px]">
           {/* Subtle Background decoration - Enlarge for clarity */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] rounded-full border border-[#1a1a1a] opacity-[0.07]"></div>
           </div>

           <div className="z-10 text-center flex flex-col items-center">
              {/* Timer - Bolder and Clearer */}
              <div className="text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none serif text-[#1a1a1a] tabular-nums tracking-tight font-normal">
                {formatTime(timeLeft)}
              </div>
              
              {/* Quote & Status Area */}
              <div className="flex flex-col items-center justify-center mt-6 w-full max-w-3xl px-4">
                {isLoadingQuote ? (
                  <div className="h-16 flex items-center justify-center">
                    <div className="animate-pulse text-xs tracking-widest uppercase text-gray-400">{t.consulting}</div>
                  </div>
                ) : (
                  quote && (
                    <p className="text-lg md:text-2xl serif italic text-center text-[#2a2a2a] animate-fade-in leading-relaxed mb-8">
                      "{quote}"
                    </p>
                  )
                )}
                
                {/* Status / Action Button - Styled as a clean box */}
                <div className="mt-4">
                  {timerStatus === 'IDLE' && (
                    <button 
                      onClick={startTimer}
                      className="px-12 py-4 border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f6f5f1] transition-all duration-300 uppercase tracking-[0.2em] text-xs md:text-sm font-medium"
                    >
                      {t.start}
                    </button>
                  )}
                  {timerStatus === 'RUNNING' && (
                    <button 
                      disabled
                      className="px-12 py-4 border border-blue-200/50 text-slate-500 cursor-default uppercase tracking-[0.25em] text-xs md:text-sm font-medium bg-transparent"
                    >
                      {t.running}
                    </button>
                  )}
                  {timerStatus === 'FINISHED' && (
                    <button 
                      onClick={resetTimer}
                      className="px-12 py-4 bg-[#1a1a1a] text-white hover:bg-[#333] transition-all duration-300 uppercase tracking-[0.2em] text-xs md:text-sm font-medium shadow-xl"
                    >
                      {t.reset}
                    </button>
                  )}
                </div>

                {!quote && !isLoadingQuote && timerStatus === 'IDLE' && (
                   <p className="text-xs tracking-widest uppercase text-gray-400 mt-6">
                     {t.selectMode}
                   </p>
                )}
              </div>
           </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-16 max-w-[1400px] mx-auto">
          {BASE_AGENDA_ITEMS.map((item) => {
            const modeData = t.modes[item.id as keyof typeof t.modes];
            return (
              <ArchCard
                key={item.id}
                image={item.image}
                video={(item as any).video}
                title={modeData.title}
                subtitle={modeData.subtitle}
                discoverText={t.discover}
                isActive={selectedMode === item.id}
                onClick={() => setSelectedMode(item.id)}
                onDiscover={(e) => handleDiscoverClick(item.id, e)}
              />
            );
          })}
        </div>

      </main>

      {/* Footer - Black background, White Bold Text, No Logo */}
      <footer className="bg-black text-white py-12 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] md:text-[11px] text-white tracking-widest font-bold uppercase opacity-100">
            &copy; 2016 - 2025 Guccio Gucci S.p.A. - All rights reserved. SIAE LICENCE # 2294/I/1936 and 5647/I/1936
          </p>
        </div>
      </footer>

      {/* Detail Page Overlay */}
      {currentItem && currentModeData && (
        <DetailPage 
          isOpen={isDetailOpen} 
          onClose={() => setIsDetailOpen(false)}
          data={{
            image: currentItem.image,
            video: (currentItem as any).video,
            title: currentModeData.title,
            subtitle: currentModeData.subtitle,
            description: currentModeData.description
          }}
        />
      )}

      {/* Extra CSS for custom animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}