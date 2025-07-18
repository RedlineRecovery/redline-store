import React from "react";

export default function RecoveryStorefront() {
  return (
    <div className="bg-white text-black">
      <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Redline Recovery Logo" className="h-8" />
        <h1 className="text-white font-bold text-lg">REDLINE RECOVERY</h1>
      </div>

      <div className="px-6 py-10 border-b border-gray-300 text-center">
        <h2 className="text-2xl font-bold mb-2">
          BUILT ON BROKEN BONES AND HARD LESSONS.
        </h2>
        <p className="mb-4 max-w-2xl mx-auto">
          This isn't theory. It's the road I’ve walked. Redline Recovery is for
          the injured, the burnt out, the ones who feel like they’re losing
          everything. Let’s rebuild — together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 border-b border-gray-300 gap-10">
        <div>
          <h3 className="text-sm font-bold uppercase">Featured</h3>
          <h2 className="text-xl font-bold mb-2">Lisfranc Recovery Tracker</h2>
          <a
            href="/downloads/Lisfranc-Recovery-Tracker.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
          >
            View Tracker
          </a>
        </div>
        <img
          src="/firetruck.jpg"
          alt="Firefighter and family in front of firetruck"
          className="rounded-lg shadow-lg max-w-sm mx-auto"
        />
      </div>

      <div className="bg-black text-white py-10 text-center">
        <h2 className="text-sm uppercase">Coming Soon</h2>
        <h1 className="text-2xl font-bold">
          Fireproofing the Mind: PTSD Recovery for First Responders
        </h1>
      </div>

      <div className="py-10 px-6 text-center">
        <h2 className="text-lg font-bold mb-4">Downloads</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/downloads/Lower-Back-Rehab-Plan.pdf"
            className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Lower Back Rehab Plan
          </a>
          <a
            href="/downloads/Lisfranc-Rehab-Program.pdf"
            className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Lisfranc Rehab Program
          </a>
          <a
            href="/downloads/Hips-Groin-Rehab-Program.pdf"
            className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Hips & Groin Rehab Program
          </a>
        </div>
      </div>

      <div className="py-10 px-6 text-center border-t border-gray-300">
        <h2 className="text-lg font-bold mb-4">Guides</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/downloads/Your-Rights-After-a-Collision-in-BC.pdf"
            className="text-blue-600 underline"
          >
            Your Rights After a Collision in BC
          </a>
          <a
            href="/downloads/Family-Support-for-PTSD.pdf"
            className="text-blue-600 underline"
          >
            Family Support for PTSD
          </a>
        </div>
      </div>
    </div>
  );
}
