"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  title: string;
  badge?: string;
}

export default function ProductGallery({ images, title, badge }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <Image
          src={images[activeIndex]}
          alt={title}
          id="product-main-img"
          width={800}
          height={1067}
          quality={95}
          unoptimized={images[activeIndex]?.startsWith("/assets/")}
          sizes="(max-width: 768px) 90vw, 50vw"
        />
        {badge && <span className="product-badge">{badge}</span>}
      </div>
      <div className="product-gallery__thumbs">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            className={`product-gallery__thumb ${i === activeIndex ? "active" : ""}`}
            aria-label={`View image ${i + 1}`}
            onClick={() => setActiveIndex(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
