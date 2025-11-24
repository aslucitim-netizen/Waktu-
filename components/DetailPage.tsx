
import React, { useEffect, useState } from 'react';

interface DetailPageProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    image: string;
    video?: string;
    title: string;
    subtitle: string;
    description: string;
  };
}

export const DetailPage: React.FC<DetailPageProps> = ({ isOpen, onClose, data }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setVisible(false), 500);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col md:flex-row bg-[#f6f5f1] transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[60] p-2 bg-white/50 hover:bg-white rounded-full transition-colors duration-300"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Visual Side (Left/Top) */}
      <div className={`w-full md:w-1/2 h-[40vh] md:h-full relative overflow-hidden transition-transform duration-700 delay-100 ${isOpen ? 'translate-y-0' : '-translate-y-10'}`}>
        {data.video ? (
           <video 
           src={data.video}
           autoPlay
           muted
           loop
           playsInline
           className="w-full h-full object-cover"
         />
        ) : (
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Side (Right/Bottom) */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-full flex flex-col justify-center px-8 md:px-20 py-12 relative">
        <div className={`transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block text-xs uppercase tracking-[0.2em] text-[#555] mb-4">
            {data.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl serif text-[#1a1a1a] mb-8 leading-tight">
             {data.title}
          </h2>
          <div className="w-12 h-0.5 bg-black mb-8"></div>
          <p className="text-base md:text-lg text-[#333] leading-relaxed serif max-w-xl">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
