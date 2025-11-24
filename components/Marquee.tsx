import React from 'react';

interface MarqueeProps {
  text: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="w-full overflow-hidden border-y border-[#e5e5e5] bg-[#f6f5f1] relative flex items-center h-10 md:h-12">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {/* Simple duplication for smooth loop */}
        <div className="flex items-center shrink-0">
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-[#2b2b2b] mx-4">
              {text}
            </span>
             <span className="text-green-900 text-sm md:text-base mx-2">❋</span>
        </div>
        <div className="flex items-center shrink-0">
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-[#2b2b2b] mx-4">
              {text}
            </span>
             <span className="text-green-900 text-sm md:text-base mx-2">❋</span>
        </div>
         <div className="flex items-center shrink-0">
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-[#2b2b2b] mx-4">
              {text}
            </span>
             <span className="text-green-900 text-sm md:text-base mx-2">❋</span>
        </div>
         <div className="flex items-center shrink-0">
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-[#2b2b2b] mx-4">
              {text}
            </span>
             <span className="text-green-900 text-sm md:text-base mx-2">❋</span>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          min-width: 100%;
        }
      `}</style>
    </div>
  );
};