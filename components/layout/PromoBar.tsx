"use client";

import { useEffect, useState } from "react";

const messages = [
  { text: "Free shipping over £300 (UK) & $300 (US) · Worldwide delivery" },
  { text: "Every piece made to order — your measurements, your colours, your vision" },
  {
    text: "Begin your bespoke order on WhatsApp",
    link: { href: "https://wa.me/447500547532", label: "Start now →" },
  },
];

export default function PromoBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const msg = messages[index];

  return (
    <div className="promo-bar">
      <p
        className="promo-bar__message"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        {msg.text}
        {msg.link && (
          <>
            {" · "}
            <a href={msg.link.href} target="_blank" rel="noopener noreferrer" className="promo-bar__link">
              {msg.link.label}
            </a>
          </>
        )}
      </p>
    </div>
  );
}
