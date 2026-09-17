'use client';

import React from 'react';
import Image from 'next/image';

interface VinstarLogoProps {
  className?: string;
  height?: number;
  size?: number;
  priority?: boolean;
}

export default function VinstarLogo({
  className = '',
  height,
  size = 40,
  priority = true,
}: VinstarLogoProps) {
  const finalHeight = height ?? size;
  // vinstar_logo.jpg dimensions: 919x340 (aspect ratio: ~2.703)
  const calculatedWidth = Math.round(finalHeight * (919 / 340));

  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <Image
        src="/assets/vinstar_logo.jpg"
        alt="Vinstar Identity & Security"
        width={calculatedWidth}
        height={finalHeight}
        className="object-contain"
        style={{ height: `${finalHeight}px`, width: 'auto' }}
        priority={priority}
      />
    </div>
  );
}
