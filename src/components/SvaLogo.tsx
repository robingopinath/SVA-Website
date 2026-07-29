import React, { useEffect, useState } from 'react';

interface SvaLogoProps {
  src?: string;
  fallbackSrc?: string;
  className?: string;
  alt?: string;
}

export const SvaLogo: React.FC<SvaLogoProps> = ({
  src = "https://lh3.googleusercontent.com/d/1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO",
  fallbackSrc = "https://drive.google.com/uc?export=view&id=1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO",
  className = "h-10 w-auto object-contain",
  alt = "Shree Varahi Associates Logo"
}) => {
  const [cleanedSrc, setCleanedSrc] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Convert white and near-white pixels (e.g. RGB > 220) to transparent alpha = 0
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          if (r > 220 && g > 220 && b > 220) {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        if (isMounted) {
          setCleanedSrc(dataUrl);
        }
      } catch (err) {
        if (isMounted) {
          setCleanedSrc(src);
        }
      }
    };

    img.onerror = () => {
      if (isMounted) {
        setCleanedSrc(fallbackSrc);
      }
    };

    return () => {
      isMounted = false;
    };
  }, [src, fallbackSrc]);

  return (
    <img
      src={cleanedSrc || src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (fallbackSrc && target.src !== fallbackSrc) {
          target.src = fallbackSrc;
        }
      }}
    />
  );
};
