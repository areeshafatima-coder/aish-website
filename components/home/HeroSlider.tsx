"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { HeroSlide } from "@/lib/data";

const SLIDE_INTERVAL = 5500;

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="hero hero--banner hero--slider">
      <div className="hero-slides">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? "active" : ""}`}
          >
            <div className="hero-slide__img">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 0}
                quality={90}
                sizes="100vw"
                className="hero-slide__image"
              />
            </div>
            <div className="hero-content hero-content--left">
              <span className="hero-tag">{slide.tag}</span>
              <h1 style={{ whiteSpace: "pre-line" }}>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <Link href="/new-arrivals" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`dot ${i === current ? "active" : ""}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
