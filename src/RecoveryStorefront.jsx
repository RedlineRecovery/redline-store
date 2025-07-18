
import React from "react";

export default function RecoveryStorefront() {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Redline Recovery Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">REDLINE RECOVERY</h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white text-center py-10 px-4 border-b border-gray-300">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          BUILT ON BROKEN BONES AND HARD LESSONS.
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          This isn't theory. It's the road I've walked. Redline Recovery is for the injured, the burnt out, the ones who feel like they’re losing everything. Let’s rebuild — together.
        </p>
      </div>

      {/* Featured Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-6 border-b border-gray-300">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <span className="uppercase text-sm font-semibold">Featured</span>
          <h3 className="text-2xl font-bold">Lisfranc Recovery Tracker</h3>
          <a
            href="https://redlinerecovery.gumroad.com/l/LisfrancTracker"
            className="bg-red-600 text-white px-4 py-2 rounded w-max mt-2"
          >
            View Tracker
          </a>
        </div>
        <img
          src="/firetruck-photo.jpg"
          alt="Firefighter and family in front of firetruck"
          className="rounded-lg w-full md:w-{30%] shadow-lg"
        />
      </div>

      {/* Coming Soon Section */}
      <div className="bg-black text-white py-10 text-center px-4">
        <h2 className="text-lg md:text-xl uppercase font-semibold">Coming Soon</h2>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          Fireproofing the Mind: PTSD Recovery for First Responders
        </h3>
      </div>

      {/* Downloads Section */}
      <div className="py-10 px-6 text-center border-b border-gray-300">
        <h2 className="text-xl font-bold mb-6 uppercase">Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DownloadCard
            title="Lower Back Rehab Plan"
            url="https://redlinerecovery.gumroad.com/l/LowerBackPlan"
          />
          <DownloadCard
            title="Lisfranc Rehab Program"
            url="https://redlinerecovery.gumroad.com/l/LisfrancRehab"
          />
          <DownloadCard
            title="Hips & Groin Rehab Program"
            url="https://redlinerecovery.gumroad.com/l/HipsGroinPlan"
          />
        </div>
      </div>

      {/* Guides Section */}
      <div className="py-10 px-6 text-center">
        <h2 className="text-xl font-bold mb-6 uppercase">Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DownloadCard
            title="Your Rights After a Collision in BC"
            url="https://redlinerecovery.gumroad.com/l/CollisionRights"
          />
          <DownloadCard
            title="Family Support for PTSD"
            url="https://redlinerecovery.gumroad.com/l/PTSDFamilyGuide"
          />
        </div>
      </div>
    </div>
  );
}

function DownloadCard({ title, url }) {
  return (
    <a
      href={url}
      className="block border border-black p-4 rounded-lg hover:bg-gray-100 transition"
    >
      <p className="font-bold text-lg">{title}</p>
    </a>
  );
}
