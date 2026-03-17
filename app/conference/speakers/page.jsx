'use client';
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { speakersData, getSpeakerImageUrl } from "../../../lib/speakers";
import SpeakerCard from "../../../components/SpeakerCard";

const Speakers = () => {
  const router = useRouter();
  
  // Ensure we scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button
          onClick={() => router.push("/conference")}
          className="mb-8 flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors uppercase tracking-widest text-sm font-bold group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back
        </button>

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Distinguished Speakers
            </span>
          </motion.h1>
          <div className="h-1 w-32 bg-cyan-500 rounded-full mx-auto shadow-[0_0_10px_#22d3ee]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakersData.map((speaker, i) => {
            const imageSrc = getSpeakerImageUrl(speaker.imageFile);

            return (
              <SpeakerCard
                key={i}
                name={speaker.name}
                title={speaker.title}
                imageSrc={imageSrc}
                delay={i * 0.05}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
