"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"check" | "visible" | "fading" | "done">("check");

  useEffect(() => {
    if (sessionStorage.getItem("imoni_loaded")) {
      setPhase("done");
      return;
    }

    setPhase("visible");

    const fadeTimer = setTimeout(() => setPhase("fading"), 2600);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("imoni_loaded", "1");
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0D0F1A]"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      <Image
        src="/imoni-logo.svg"
        alt="Imoni"
        width={160}
        height={76}
        priority
        className="mb-8"
        style={{ width: "auto", height: "auto" }}
      />
      <div className="w-48 sm:w-56 h-0.75 rounded-full overflow-hidden bg-white/10">
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, #8B5CF6, #E91E8C, #FF8C00)",
            animation: phase === "visible" ? "splash-bar 2.6s ease-in-out forwards" : "none",
          }}
        />
      </div>
    </div>
  );
}
