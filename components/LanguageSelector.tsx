
import React, { useState, useRef, useEffect } from 'react';
import { translations, LanguageCode } from '../translations';

interface LanguageSelectorProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] hover:text-gray-600 transition-colors px-2 py-1"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>{currentLang.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-[#f6f5f1] border border-[#c0c0c0] shadow-xl z-50 grid grid-cols-1">
          {(Object.keys(translations) as LanguageCode[]).map((code) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code);
                setIsOpen(false);
              }}
              className={`text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors flex justify-between items-center ${currentLang === code ? 'bg-[#e5e5e5] font-bold text-black' : 'text-gray-600'}`}
            >
              <span>{translations[code].name}</span>
              {currentLang === code && <span className="text-green-800">❋</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
