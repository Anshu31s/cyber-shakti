'use client';
import React from "react";
import { motion } from "framer-motion";

const PaperPublication = () => {
  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Paper Publication
            </span>
          </motion.h1>
          <div className="h-1 w-32 bg-cyan-500 rounded-full mx-auto shadow-[0_0_10px_#22d3ee]"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            Call For Papers
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Paper Submit
          </motion.button>
        </div>

        <div className="max-w-4xl mx-auto text-gray-300 space-y-6 text-lg">
          <p>
            Details about paper publication, submission guidelines, and topics
            will be listed here.
          </p>
          <div className="bg-[#0b0d14] border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Submission Guidelines
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Original research papers are invited.</li>
              <li>
                Papers should be formatted according to the conference template.
              </li>
              <li>All submissions will undergo a peer-review process.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperPublication;
