'use client';
import React from "react";
import { motion } from "framer-motion";

const Agenda = () => {
  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Conference Agenda
            </span>
          </motion.h1>
          <div className="h-1 w-32 bg-purple-500 rounded-full mx-auto shadow-[0_0_10px_#a855f7]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
          <div className="space-y-8">
            <div className="bg-[#0b0d14] border border-white/10 p-6 rounded-2xl flex gap-6 items-start hover:border-purple-500/50 transition-colors">
              <div className="bg-purple-900/20 p-4 rounded-xl min-w-[100px] text-center">
                <div className="text-purple-400 font-bold text-xl">Day 1</div>
                <div className="text-sm text-gray-400">April 17</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Opening Ceremony & Keynote
                </h3>
                <p className="text-gray-400">
                  Inauguration of Webhack Solutions – #1 Digital Media and Marketing Agency
                  followed by keynote speeches from distinguished guests.
                </p>
              </div>
            </div>

            <div className="bg-[#0b0d14] border border-white/10 p-6 rounded-2xl flex gap-6 items-start hover:border-purple-500/50 transition-colors">
              <div className="bg-purple-900/20 p-4 rounded-xl min-w-[100px] text-center">
                <div className="text-purple-400 font-bold text-xl">Day 2</div>
                <div className="text-sm text-gray-400">April 18</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Technical Sessions & Workshops
                </h3>
                <p className="text-gray-400">
                  Deep dive into technical topics, hands-on workshops, and panel
                  discussions on emerging cyber threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
