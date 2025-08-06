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

  return (
    <div className="relative flex flex-col items-center">
      {/* Watch Container */}
      <div className="floating-watch relative">
        {/* Watch Face */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Watch Body */}
          <div className="absolute inset-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-600">
            {/* Screen */}
            <div className="absolute inset-4 bg-black rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <div className="text-2xl font-bold">12:30</div>
                  <div className="text-sm opacity-80">Monday</div>
                </div>
              </div>
            </div>
            
            {/* Digital Crown */}
            <div className="absolute -right-1 top-1/3 w-3 h-8 bg-slate-600 rounded-r-full"></div>
            <div className="absolute -right-1 top-1/2 w-3 h-6 bg-slate-600 rounded-r-full"></div>
          </div>

          {/* Watch Band */}
          <div 
            className="absolute inset-0 rounded-full opacity-80 transition-all duration-500"
            style={{
              background: `linear-gradient(45deg, ${watchBands[currentBand].color}, ${watchBands[currentBand].color}dd)`,
              transform: 'scale(1.1)',
              filter: 'blur(1px)',
            }}
          >
            {/* Band segments */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-8 rounded-t-2xl" 
                 style={{ backgroundColor: watchBands[currentBand].color }}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-16 h-8 rounded-b-2xl" 
                 style={{ backgroundColor: watchBands[currentBand].color }}></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-16 rounded-l-2xl" 
                 style={{ backgroundColor: watchBands[currentBand].color }}></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-16 rounded-r-2xl" 
                 style={{ backgroundColor: watchBands[currentBand].color }}></div>
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