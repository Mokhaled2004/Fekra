"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import SplashScreen from "@/components/layout/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}

      <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-yellow-400 selection:text-gray-900">
        <Navbar />

        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="text-center py-24 border-2 border-dashed border-yellow-200 rounded-3xl bg-yellow-50/50">
            <h1 className="text-4xl font-[family-name:var(--font-russo)] uppercase italic text-gray-900 mb-3">
              FEKRA — Anatomy Battle
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Fast-paced competitive upper limb anatomy card game. Your
              dashboard and game arena are ready to build!
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
