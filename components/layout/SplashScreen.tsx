"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("imoni_loaded");
    }
    return true;
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const fadeTimer = setTimeout(() => setFading(true), 2600);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("imoni_loaded", "1");
    }, 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0F1A] transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <Image
        src="/imoni-logo.svg"
        alt="Imoni"
        width={160}
        height={76}
        priority
        className="mb-8"
      />
      <div className="w-48 sm:w-56 h-[3px] rounded-full overflow-hidden bg-white/10">
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, #8B5CF6, #E91E8C, #FF8C00)",
            animation: "splash-bar 2.6s ease-in-out forwards",
          }}
        />
      </div>
    </div>
  );
}
