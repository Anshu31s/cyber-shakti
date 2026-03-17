'use client';
import React from "react";
import { motion } from "framer-motion";

const SpeakerCard = ({ name, title, imageSrc, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px] flex flex-col"
    >
      {/* Background overlay for hover state - Expands from bottom or fades in */}
      <div className="absolute inset-0 bg-[#3430bf] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        {/* Top Text Section */}
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight mb-2">
            {name}
          </h3>
          <p className="text-sm font-medium text-gray-500 group-hover:text-blue-200 transition-colors duration-300 line-clamp-3">
            {title}
          </p>
        </div>

        {/* Bottom Image Section */}
        <div className="mt-auto relative w-full h-[220px] overflow-hidden">
          {/* The Blue Hill Shape (Visible by default, blends on hover) */}
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-[#3430bf] rounded-t-[100%] scale-x-[1.5] translate-y-4 group-hover:translate-y-8 transition-transform duration-500"></div>

          {/* Image */}
          <div className="absolute inset-0 flex items-end justify-center pb-0">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={name}
                className="w-48 h-48 object-cover rounded-full border-4 border-white group-hover:border-[#3430bf]/20 shadow-lg group-hover:scale-110 transition-transform duration-500 origin-bottom mb-4"
              />
            ) : (
              // Fallback Initial
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white mb-6 group-hover:bg-white/10 group-hover:text-white">
                <span className="text-4xl text-gray-400 font-bold group-hover:text-white">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;
