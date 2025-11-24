import React from 'react';

interface MarqueeProps {
  text: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="w-full overflow-hidden border-y border-[#c0c0c0] py-3 bg-[#f6f5f1] relative flex items-center">
      <div className="absolute top-0 bottom-0 left-0 w-8 z-10 bg-gradient-to-r from-[#f6f5f1] to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-8 z-10 bg-gradient-to-l from-[#f6f5f1] to-transparent"></div>
      
      <div className="whitespace-nowrap animate-marquee flex gap-8 items-center text-xs tracking-[0.2em] uppercase font-medium text-[#2b2b2b]">
        {/* Repeating the text multiple times to ensure smooth loop */}
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={i}>
            <span>{text}</span>
            <span className="text-green-800 text-lg mx-2">❋</span>
          </React.Fragment>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};