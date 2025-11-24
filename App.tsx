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
    image: 'https://picsum.photos/id/1076/400/600?grayscale',
    video: 'https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/72a0a43c-b6a5-4e83-b80e-f82796b8a315/ab6d51c0-ffbd-47d0-b126-8887bcd0adf5/main.mp4?fastly_token=NjkyNDZiZTlfMzQzY2ZkNDEzNWJlYjdhYzFlZDFjMzdmNzc5NzU4NGFiMDEyZWFiYjIwMDgzN2U2ZTY4ODk4MTZkMDdiYWU4YV8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS83MmEwYTQzYy1iNmE1LTRlODMtYjgwZS1mODI3OTZiOGEzMTUvYWI2ZDUxYzAtZmZiZC00N2QwLWIxMjYtODg4N2JjZDBhZGY1L21haW4ubXA0'
  },
  { 
    id: 'create', 
    image: 'https://picsum.photos/id/1059/400/600?grayscale',
    video: 'https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/2924921183001/15f754d2-c039-4d97-a401-82d1b378e7f4/ac5a26d0-7ad1-44d5-ad3d-7fcb5d22c912/main.mp4?fastly_token=NjkyNDY4MDVfNDkzNjhlNGMxMjI4ZDgwYzU1NjE3NDU5MTEzYTY3NjI1ZjI3Nzk4MTFjNzRkODIyZGZhNDhiZjRjYjJlM2NhMl8vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMjkyNDkyMTE4MzAwMS8xNWY3NTRkMi1jMDM5LTRkOTctYTQwMS04MmQxYjM3OGU3ZjQvYWM1YTI2ZDAtN2FkMS00NGQ1LWFkM2QtN2ZjYjVkMjJjOTEyL21haW4ubXA0'
  },
  { 
    id: 'review', 
    image: 'https://media.gucci.com/content/DiaryHeroArticle_Standard_475x340/1741708803/DiaryHeroArticle_fw25fs-lineup_001_Default.jpg' 
  },
  { 
    id: 'rest', 
    image: 'https://media.gucci.com/content/DiaryArticleSingle_Standard_768x1075/1743408916/DiaryArticleSingle_Gucci-Bamboo-032025-05_001_Default.jpg' 
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
        <div className="flex flex-col items-center justify-center mb-24 relative">
           {/* Subtle Background decoration */}
           <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <div className="w-64 h-64 rounded-full border border-[#1a1a1a]"></div>
           </div>

           <div className="z-10 text-center">
              <div className="text-[5rem] md:text-[7rem] lg:text-[8rem] leading-none serif text-[#1a1a1a] tabular-nums tracking-tighter font-light">
                {formatTime(timeLeft)}
              </div>
              
              <div className="h-20 flex items-center justify-center flex-col mt-4">
                {isLoadingQuote ? (
                  <div className="animate-pulse text-xs tracking-widest uppercase text-gray-400">{t.consulting}</div>
                ) : (
                  quote && (
                    <p className="text-base md:text-lg serif italic max-w-2xl text-center text-[#2f4f4f] animate-fade-in px-4 leading-relaxed">
                      "{quote}"
                    </p>
                  )
                )}
                
                {!quote && !isLoadingQuote && (
                  <p className={`text-xs tracking-widest uppercase mt-2 ${timerStatus === 'RUNNING' ? 'text-green-800 animate-pulse' : 'text-gray-400'}`}>
                    {timerStatus === 'RUNNING' ? t.waiting : t.selectMode}
                  </p>
                )}
              </div>

              <div className="mt-10">
                {timerStatus === 'IDLE' && (
                  <button 
                    onClick={startTimer}
                    className="px-10 py-4 border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f6f5f1] transition-all duration-300 uppercase tracking-[0.2em] text-xs md:text-sm font-medium"
                  >
                    {t.start}
                  </button>
                )}
                {timerStatus === 'RUNNING' && (
                  <button 
                    disabled
                    className="px-10 py-4 border border-gray-300 text-gray-400 cursor-not-allowed uppercase tracking-[0.2em] text-xs md:text-sm font-medium"
                  >
                    {t.running}
                  </button>
                )}
                {timerStatus === 'FINISHED' && (
                  <button 
                    onClick={resetTimer}
                    className="px-10 py-4 bg-[#1a1a1a] text-white hover:bg-[#333] transition-all duration-300 uppercase tracking-[0.2em] text-xs md:text-sm font-medium shadow-xl"
                  >
                    {t.reset}
                  </button>
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