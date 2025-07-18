import React from "react";

export default function RecoveryStorefront() {
  return (
    <div className="bg-white text-black">
      {/* HEADER */}
      <div className="bg-red-600 text-black text-center py-2">
        <h1 className="text-2xl font-bold">Redline Recovery</h1>
      </div>

      {/* HERO */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white py-10 px-6 gap-10">
        <div className="max-w-xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            BUILT ON BROKEN BONES AND HARD LESSONS.
          </h2>
          <p className="text-lg mb-6">
            This isn’t theory. It’s the road I’ve walked. Redline Recovery is
            for the injured, the burnt out, the ones who feel like they’re
            losing everything. Let’s rebuild — together.
          </p>
        </div>
        <img
          src="/firetruck.jpg"
          alt="Firefighter and family in front of firetruck"
          className="rounded-lg shadow-lg max-w-xs"
        />
      </div>

      {/* FEATURED */}
      <div className="text-center py-6 border-t">
        <h3 className="uppercase text-sm font-bold mb-2">Featured</h3>
        <h2 className="text-xl font-bold mb-2">Lisfranc Recovery Tracker</h2>
        <a
          href="/downloads/Lisfranc-Recovery-Tracker.pdf"
          className="text-red-600 font-bold underline"
          target="_blank"
        >
          View Tracker
        </a>
      </div>

      {/* COMING SOON */}
      <div className="bg-black text-white text-center py-10">
        <h2 className="text-sm uppercase">Coming Soon</h2>
        <h1 className="text-2xl font-bold">
          Fireproofing the Mind: PTSD Recovery for First Responders
        </h1>
      </div>

      {/* DOWNLOADS */}
      <div className="text-center py-10 px-4">
        <h2 className="text-lg font-bold mb-4">Downloads</h2>
        <div className="flex flex
