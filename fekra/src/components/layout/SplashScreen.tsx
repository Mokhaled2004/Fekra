"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swords, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // 1. High-priority explicit asset preloading instruction sent to the browser DOM
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/FekraSplashScreen.png";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const fadeTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(fadeTimer);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const c1 = card1Ref.current;
    const c2 = card2Ref.current;
    const c3 = card3Ref.current;
    const logo = logoRef.current;

    if (!c1 || !c2 || !c3) return;

    // Detect mobile screens dynamically to optimize GSAP translation ranges
    const isMobile = window.innerWidth < 640;
    const shiftX = isMobile ? 35 : 55;
    const shiftXSub = isMobile ? 25 : 40;

    // 2. Premium deceleration curve for a cinematic image fade-in
    if (logo) {
      gsap.fromTo(
        logo,
        { opacity: 0, scale: 0.94, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1, // Increased timeline duration for smooth visual accommodation
          ease: "power2.out", // Smooth exponential deceleration curve
          force3D: true, // Locks hardware processing blocks down to suppress stutters
        },
      );
    }

    // 3. Loop animation for the flashcard deck shuffling
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    tl.set([c1, c2, c3], { clearProps: "all" });

    tl.to(c1, {
      x: -shiftX,
      y: -15,
      rotation: -20,
      scale: 0.95,
      zIndex: 10,
      duration: 0.35,
    })
      .to(
        c3,
        {
          x: shiftX,
          y: 15,
          rotation: 20,
          scale: 0.95,
          zIndex: 10,
          duration: 0.35,
        },
        "<",
      )
      .to(
        c2,
        {
          x: 0,
          y: -5,
          rotation: 0,
          scale: 1.05,
          zIndex: 30,
          duration: 0.35,
        },
        "<",
      )

      .to(c1, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        zIndex: 20,
        duration: 0.35,
      })
      .to(
        c3,
        {
          x: -shiftXSub,
          y: -10,
          rotation: -12,
          scale: 0.97,
          zIndex: 15,
          duration: 0.35,
        },
        "<",
      )
      .to(
        c2,
        {
          x: shiftXSub,
          y: 10,
          rotation: 12,
          scale: 0.97,
          zIndex: 15,
          duration: 0.35,
        },
        "<",
      )

      .to(c3, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        zIndex: 30,
        duration: 0.35,
      })
      .to(
        c1,
        {
          x: -shiftX,
          y: 12,
          rotation: -15,
          scale: 0.96,
          zIndex: 15,
          duration: 0.35,
        },
        "<",
      )
      .to(
        c2,
        {
          x: shiftX,
          y: -12,
          rotation: 15,
          scale: 0.96,
          zIndex: 15,
          duration: 0.35,
        },
        "<",
      )

      .to(c2, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        zIndex: 30,
        duration: 0.35,
      })
      .to(
        c1,
        {
          x: -20,
          y: -5,
          rotation: -8,
          scale: 0.98,
          zIndex: 20,
          duration: 0.35,
        },
        "<",
      )
      .to(
        c3,
        {
          x: 20,
          y: 5,
          rotation: 8,
          scale: 0.98,
          zIndex: 20,
          duration: 0.35,
        },
        "<",
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 text-slate-900 px-4 transition-opacity duration-500 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* GSAP Animated Flashcard Deck Area - Scaled down for mobile using absolute dimensions */}
      <div className="relative w-48 sm:w-64 h-64 sm:h-80 mb-8 sm:mb-12 flex items-center justify-center">
        {/* Card 1 */}
        <div
          ref={card1Ref}
          className="absolute w-36 sm:w-48 h-48 sm:h-64 bg-[#fffdf4] border border-amber-200/70 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col justify-between p-3 sm:p-5 select-none backface-hidden transform-gpu"
        >
          <div className="flex justify-between items-center text-slate-500 text-[10px] sm:text-xs font-semibold tracking-wider">
            <span>Anatomy Deck</span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ffcc00]" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-xl font-black tracking-wide text-slate-800">
              UPPER LIMB
            </h3>
            <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
              Card 1 of 45
            </span>
          </div>
          <div className="w-full py-1.5 sm:py-2 border border-dashed border-amber-200 rounded-lg sm:rounded-xl text-center text-slate-500 text-[10px] sm:text-xs font-semibold tracking-wide bg-amber-50/50">
            Review
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          className="absolute w-36 sm:w-48 h-48 sm:h-64 bg-[#fffdf4] border border-amber-200/70 rounded-xl sm:rounded-2xl shadow-[0_15px_35px_-5px_rgba(255,204,0,0.15)] flex flex-col justify-between p-3 sm:p-5 select-none backface-hidden transform-gpu"
        >
          <div className="flex justify-between items-center text-slate-500 text-[10px] sm:text-xs font-semibold tracking-wider">
            <span>Anatomy Deck</span>
            <Swords className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-800" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-xl font-black tracking-wide text-slate-900">
              UPPER LIMB
            </h3>
            <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
              Card 2 of 45
            </span>
          </div>
          <div className="w-full py-1.5 sm:py-2 border border-dashed border-amber-300 rounded-lg sm:rounded-xl text-center text-slate-800 text-[10px] sm:text-xs font-bold tracking-wide bg-[#ffcc00]/20">
            Review
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          className="absolute w-36 sm:w-48 h-48 sm:h-64 bg-[#fffdf4] border border-amber-200/70 rounded-xl sm:rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col justify-between p-3 sm:p-5 select-none backface-hidden transform-gpu"
        >
          <div className="flex justify-between items-center text-slate-500 text-[10px] sm:text-xs font-semibold tracking-wider">
            <span>Anatomy Deck</span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ffcc00]" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-xl font-black tracking-wide text-slate-800">
              UPPER LIMB
            </h3>
            <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
              Card 3 of 45
            </span>
          </div>
          <div className="w-full py-1.5 sm:py-2 border border-dashed border-amber-200 rounded-lg sm:rounded-xl text-center text-slate-500 text-[10px] sm:text-xs font-semibold tracking-wide bg-amber-50/50">
            Review
          </div>
        </div>
      </div>

      {/* 4. Optimized image block initialized with hard-coded opacity-0 to eliminate sudden pops */}
      <div
        ref={logoRef}
        style={{ opacity: 0 }}
        className="relative z-10 flex flex-col items-center select-none max-w-full px-2 will-change-transform"
      >
        <img
          src="/FekraSplashScreen.png"
          alt="Fekra Anatomy Battle Title"
          loading="eager"
          decoding="sync"
          className="h-auto w-full max-w-[280px] sm:max-w-md object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
        />
      </div>
    </div>
  );
}
