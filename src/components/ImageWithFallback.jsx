import React, { useState, useEffect } from 'react';

const FALLBACK_POOLS = {
  bridal: [
    '/bridal-makeup-manu.jpg',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85'
  ],
  party: [
    '/party-makeup.jpg',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85'
  ],
  hd: [
    '/hd-makeup.jpg',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85'
  ],
  softglam: [
    '/soft-glam.jpg',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85'
  ],
  hair: [
    '/hairstyles.jpg',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85'
  ],
  saree: [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85'
  ],
  portrait: [
    '/bridal-makeup-manu.jpg',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85'
  ],
  general: [
    '/bridal-makeup-manu.jpg',
    '/soft-glam.jpg',
    '/party-makeup.jpg',
    '/hd-makeup.jpg',
    '/hairstyles.jpg'
  ]
};

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  category = "general",
  fallbackSrc,
  loading = "lazy",
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setImgSrc(src);
    setErrorCount(0);
  }, [src]);

  const handleError = () => {
    const pool = FALLBACK_POOLS[category] || FALLBACK_POOLS.general;
    if (fallbackSrc && errorCount === 0) {
      setImgSrc(fallbackSrc);
      setErrorCount(1);
    } else if (errorCount < pool.length) {
      setImgSrc(pool[errorCount % pool.length]);
      setErrorCount(prev => prev + 1);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "Pretty in Pinks by Manu - Professional Makeup Artistry"}
      className={className}
      onError={handleError}
      loading={loading}
      {...props}
    />
  );
}
