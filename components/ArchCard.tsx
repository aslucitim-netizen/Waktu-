
import React from 'react';

interface ArchCardProps {
  image: string;
  video?: string;
  title: string;
  subtitle: string;
  discoverText: string;
  isActive: boolean;
  onClick: () => void;
  onDiscover: (e: React.MouseEvent) => void;
}

export const ArchCard: React.FC<ArchCardProps> = ({ image, video, title, subtitle, discoverText, isActive, onClick, onDiscover }) => {
  return (
    <div 
      className={`group cursor-pointer flex flex-col items-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
      onClick={onClick}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[50%] mb-6 shadow-sm group-hover:shadow-md transition-all duration-500 bg-gray-100">
        {video ? (
          <video 
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
      </div>
      
      <h3 className="text-xl md:text-2xl lg:text-3xl text-center mb-2 tracking-wide serif text-[#1a1a1a]">
        {title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
        ))}
      </h3>
      
      <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-[#555] mb-4">
        {subtitle}
      </p>

      <div className="border-b border-[#1a1a1a] pb-0.5 group-hover:border-green-800 transition-colors">
        <button 
          onClick={onDiscover}
          className="text-[10px] md:text-xs uppercase tracking-widest text-[#1a1a1a] hover:text-green-800 transition-colors bg-transparent border-none p-0 cursor-pointer"
        >
          {discoverText}
        </button>
      </div>
    </div>
  );
};
