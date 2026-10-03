"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Swords, BookOpen, Layers } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-0 md:border-b border-gray-100 shadow-sm md:shadow-sm transition-all duration-300 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main flex row acting as the anchor grid for desktop positioning layout */}
          <div className="relative flex items-center justify-between h-20 w-full">
            {/* Left: Desktop Logo wrapper swapped to .webp asset */}
            <div className="hidden md:flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="relative w-44 h-16 flex items-center">
                  <Image
                    src="/FekraLogo.webp"
                    alt="FEKRA Anatomy Battle Logo"
                    fill
                    className="object-contain object-left transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Mobile View: Centered Logo Placement swapped to .webp asset */}
            <div className="flex md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-14 items-center justify-center pointer-events-auto">
              <Link href="/" className="relative w-full h-full">
                <Image
                  src="/FekraLogo.webp"
                  alt="FEKRA Anatomy Battle Logo"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </Link>
            </div>

            {/* Center: Desktop Nav Links (Locked perfectly to horizontal centerline via absolute coordinates) */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Link
                href="#rules"
                className="group relative flex items-center gap-2 text-sm font-normal tracking-wide text-gray-800 hover:text-yellow-600 transition-colors font-[family-name:var(--font-russo)] uppercase italic py-2"
              >
                <BookOpen
                  size={18}
                  className="text-yellow-500 not-italic transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                />
                Game Rules
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                href="#cards"
                className="group relative flex items-center gap-2 text-sm font-normal tracking-wide text-gray-800 hover:text-yellow-600 transition-colors font-[family-name:var(--font-russo)] uppercase italic py-2"
              >
                <Layers
                  size={18}
                  className="text-yellow-500 not-italic transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                />
                Muscle Deck
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              <Link
                href="#battle"
                className="group relative flex items-center gap-2 text-sm font-normal tracking-wide text-gray-800 hover:text-yellow-600 transition-colors font-[family-name:var(--font-russo)] uppercase italic py-2"
              >
                <Swords
                  size={18}
                  className="text-yellow-500 not-italic transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                />
                Anatomy Battle
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            {/* Right: Desktop Action CTA Button */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              <Link
                href="#play"
                className="px-6 py-3 rounded-xl bg-yellow-400 text-gray-900 font-normal text-sm tracking-wider uppercase hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] transition-all duration-300 active:scale-95 font-[family-name:var(--font-russo)] italic"
              >
                Start Game
              </Link>
            </div>

            {/* Mobile Menu Action Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-transform duration-300 active:scale-90 ml-auto z-10"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE FULL HEIGHT SIDE DRAWER VIEW OVERLAYS --- */}

      {/* Dynamic Background Dimmed Overlay Sheet covering the root page */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-50 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in Drawer Main View Container Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-screen w-[300px] max-w-[85vw] bg-white z-50 p-6 flex flex-col shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header Segment with X Close Button Toggle */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase font-[family-name:var(--font-russo)]">
            Menu Navigation
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 active:scale-95 border border-gray-100"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links Navigation Stack */}
        <nav className="flex flex-col space-y-3 flex-1">
          <Link
            href="#rules"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base tracking-wide font-normal text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 font-[family-name:var(--font-russo)] uppercase italic transition-colors"
          >
            <BookOpen size={20} className="text-yellow-500 not-italic" />
            Game Rules
          </Link>
          <Link
            href="#cards"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base tracking-wide font-normal text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 font-[family-name:var(--font-russo)] uppercase italic transition-colors"
          >
            <Layers size={20} className="text-yellow-500 not-italic" />
            Muscle Deck
          </Link>
          <Link
            href="#battle"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base tracking-wide font-normal text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 font-[family-name:var(--font-russo)] uppercase italic transition-colors"
          >
            <Swords size={20} className="text-yellow-500 not-italic" />
            Anatomy Battle
          </Link>
        </nav>

        {/* Action Button at the base of the Panel view */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <Link
            href="#play"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-4 rounded-xl bg-yellow-400 text-gray-900 font-normal text-base tracking-wider uppercase shadow-md font-[family-name:var(--font-russo)] italic hover:bg-yellow-500 transition-colors active:scale-98"
          >
            Start Game
          </Link>
        </div>
      </div>
    </>
  );
}
