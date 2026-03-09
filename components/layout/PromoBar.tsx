"use client";

import { useEffect, useState } from "react";

const messages = [
  "Free shipping over £300 (UK) & $300 (US) · Worldwide delivery",
  "Every piece made to order — your measurements, your colours, your vision",
  "WhatsApp us to begin your order · +44 7500 547532",
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

  return (
    <div className="promo-bar">
      <p
        className="promo-bar__message"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        {messages[index]}
        {index === 2 && (
          <>
            {" · "}
            <a href="https://wa.me/447500547532">WhatsApp Now</a>
          </>
        )}
      </p>
    </div>
  );
}
