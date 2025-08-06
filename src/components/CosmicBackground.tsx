import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  left: number;
  top: number;
  delay: number;
}

export const CosmicBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate random stars
    const newStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
      });
    }
    setStars(newStars);

    // Generate shooting stars
    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 6; i++) {
      newShootingStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 15,
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="cosmic-background">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="shooting-star"
          style={{
            left: `${shootingStar.left}%`,
            top: `${shootingStar.top}%`,
            width: '100px',
            height: '2px',
            animationDelay: `${shootingStar.delay}s`,
          }}
        />
      ))}
    </div>
  );
};