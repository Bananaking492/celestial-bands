import { useState } from 'react';

interface WatchBand {
  id: string;
  name: string;
  color: string;
  material: string;
}

const watchBands: WatchBand[] = [
  { id: '1', name: 'Midnight Ocean', color: '#1e3a8a', material: 'Sport Loop' },
  { id: '2', name: 'Cosmic Silver', color: '#e5e7eb', material: 'Milanese Loop' },
  { id: '3', name: 'Deep Purple', color: '#7c3aed', material: 'Leather Link' },
  { id: '4', name: 'Aurora Green', color: '#059669', material: 'Sport Band' },
];

export const FloatingWatch = () => {
  const [currentBand, setCurrentBand] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleWatchClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Watch Container */}
      <div className={`floating-watch relative cursor-pointer transition-transform duration-1000 ${isRotating ? 'rotate-y-360' : ''}`} onClick={handleWatchClick}>
        {/* Watch Face */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Watch Body - More realistic Apple Watch shape */}
          <div className="absolute inset-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] shadow-2xl border border-gray-700 overflow-hidden">
            {/* Watch Case Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/30 via-transparent to-transparent rounded-[2.5rem]"></div>
            
            {/* Screen */}
            <div className="absolute inset-3 bg-black rounded-[2rem] overflow-hidden border border-gray-800">
              {/* Always-on Display */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                {/* Watch Face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  {/* Time */}
                  <div className="text-3xl md:text-4xl font-light tracking-wide mb-1">12:30</div>
                  {/* Date */}
                  <div className="text-sm opacity-60 mb-4">Mon, Dec 4</div>
                  
                  {/* Activity Rings */}
                  <div className="relative w-16 h-16 mb-2">
                    <svg className="w-16 h-16 rotate-[-90deg]" viewBox="0 0 64 64">
                      {/* Outer ring - Move */}
                      <circle cx="32" cy="32" r="28" fill="none" stroke="#ff006e" strokeWidth="3" strokeDasharray="175" strokeDashoffset="50" className="opacity-80"/>
                      {/* Middle ring - Exercise */}
                      <circle cx="32" cy="32" r="22" fill="none" stroke="#8ef000" strokeWidth="3" strokeDasharray="138" strokeDashoffset="20" className="opacity-80"/>
                      {/* Inner ring - Stand */}
                      <circle cx="32" cy="32" r="16" fill="none" stroke="#00e5ff" strokeWidth="3" strokeDasharray="100" strokeDashoffset="10" className="opacity-80"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Digital Crown */}
            <div className="absolute -right-1 top-[35%] w-4 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-r-full border border-gray-500 shadow-lg"></div>
            {/* Side Button */}
            <div className="absolute -right-1 top-[55%] w-4 h-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-r-md border border-gray-500 shadow-lg"></div>
            
            {/* Speaker Grille */}
            <div className="absolute -left-0.5 top-[40%] w-1 h-12 bg-gray-700 rounded-l-full">
              <div className="space-y-0.5 pt-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 bg-gray-600 rounded-full mx-auto"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Watch Band - More realistic design */}
          <div className="absolute inset-0">
            {/* Top band segment */}
            <div 
              className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-16 rounded-t-3xl transition-all duration-500 shadow-lg"
              style={{ 
                backgroundColor: watchBands[currentBand].color,
                background: `linear-gradient(145deg, ${watchBands[currentBand].color}, ${watchBands[currentBand].color}dd)`
              }}
            >
              {/* Band texture */}
              <div className="absolute inset-1 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent"></div>
            </div>
            
            {/* Bottom band segment */}
            <div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-16 rounded-b-3xl transition-all duration-500 shadow-lg"
              style={{ 
                backgroundColor: watchBands[currentBand].color,
                background: `linear-gradient(145deg, ${watchBands[currentBand].color}, ${watchBands[currentBand].color}dd)`
              }}
            >
              {/* Band texture */}
              <div className="absolute inset-1 rounded-b-3xl bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>
            
            {/* Left band segment */}
            <div 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-16 h-12 rounded-l-3xl transition-all duration-500 shadow-lg"
              style={{ 
                backgroundColor: watchBands[currentBand].color,
                background: `linear-gradient(145deg, ${watchBands[currentBand].color}, ${watchBands[currentBand].color}dd)`
              }}
            >
              {/* Band texture */}
              <div className="absolute inset-1 rounded-l-3xl bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            
            {/* Right band segment */}
            <div 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-16 h-12 rounded-r-3xl transition-all duration-500 shadow-lg"
              style={{ 
                backgroundColor: watchBands[currentBand].color,
                background: `linear-gradient(145deg, ${watchBands[currentBand].color}, ${watchBands[currentBand].color}dd)`
              }}
            >
              {/* Band texture */}
              <div className="absolute inset-1 rounded-r-3xl bg-gradient-to-l from-white/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Band Selector */}
      <div className="mt-12 flex space-x-4">
        {watchBands.map((band, index) => (
          <button
            key={band.id}
            onClick={() => setCurrentBand(index)}
            className={`w-16 h-16 rounded-full border-2 transition-all duration-300 ${
              currentBand === index 
                ? 'border-primary shadow-glow scale-110' 
                : 'border-card-border hover:border-primary/50 hover:scale-105'
            }`}
            style={{ backgroundColor: band.color }}
          >
            <span className="sr-only">{band.name}</span>
          </button>
        ))}
      </div>

      {/* Band Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold cosmic-text">
          {watchBands[currentBand].name}
        </h3>
        <p className="text-muted-foreground mt-1">
          {watchBands[currentBand].material}
        </p>
      </div>
    </div>
  );
};