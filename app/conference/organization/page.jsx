'use client';
import React from "react";
import { motion } from "framer-motion";

const Organising = () => {
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
              Organizers
            </span>
          </motion.h1>
          <div className="h-1 w-32 bg-cyan-500 rounded-full mx-auto shadow-[0_0_10px_#22d3ee]"></div>
        </div>

        {/* --- Patrons Section --- */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {/* Chief Patron: Dr. Devesh Kumar Singh */}
            <div className="relative group w-full md:w-80">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-[#0b0d14] border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-400 transition-colors duration-300 h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-transparent to-transparent z-10 opacity-80"></div>
                  <img
                    src="/assets/Speakers/Devesh Singh2.jpg"
                    alt="Dr. Devesh Kumar Singh"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-cyan-500/90 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    Chief Patron
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-end relative z-20 -mt-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Dr. Devesh Kumar Singh
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">Chairman</p>
                  <p className="text-cyan-500 text-xs font-bold uppercase tracking-wide">
                    Noida International University
                  </p>
                </div>
              </div>
            </div>

            {/* Patron: Prof. (Dr.) Vikram Singh */}
            <div className="relative group w-full md:w-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-[#0b0d14] border border-blue-500/30 rounded-2xl overflow-hidden hover:border-blue-400 transition-colors duration-300 h-full flex flex-col">
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-transparent to-transparent z-10 opacity-80"></div>
                  <img
                    src="/assets/Speakers/IPS Vikram Singh.jpg"
                    alt="Prof. (Dr.) Vikram Singh"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    Patron
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-end relative z-20 -mt-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    Prof. (Dr.) Vikram Singh
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">Chancellor</p>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-wide">
                    Noida International University
                  </p>
                </div>
              </div>
            </div>

            {/* Vice Patron: Prof. (Dr.) Uma Bhardwaj */}
            <div className="relative group w-full md:w-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
              <div className="relative bg-[#0b0d14] border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-400 transition-colors duration-300 h-full flex flex-col">
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-transparent to-transparent z-10 opacity-80"></div>
                  <img
                    src="/assets/Speakers/Uma Bhardwaj.jpeg"
                    alt="Prof. (Dr.) Uma Bhardwaj"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-purple-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    Vice Patron
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-end relative z-20 -mt-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Prof. (Dr.) Uma Bhardwaj
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">Vice Chancellor</p>
                  <p className="text-purple-500 text-xs font-bold uppercase tracking-wide">
                    Noida International University
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- About NIU Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group w-full bg-gradient-to-br from-[#0b0d14] to-[#12141c] border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl p-8 md:p-12"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10">
            {/* Logo Section */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-32 h-32 bg-white rounded-2xl p-4 shadow-lg group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <img
                  src="/assets/logo/niu.png"
                  alt="Noida International University"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-left">
              <div className="mb-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    NIU
                  </span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto md:mx-0"></div>
              </div>

              <div className="text-gray-300 leading-relaxed text-lg space-y-6 font-light text-justify md:text-left">
                <p>
                  <span className="text-cyan-400 font-bold">
                    Noida International University
                  </span>
                  , established under U.P. LEGISLATURE ACT NO. 27 OF 2010 and
                  recognized by Section 2(f) of the UGC Act, 1956, is proudly
                  sponsored by the Maruti Educational Trust. Its expansive
                  75-acre campus, adorned with lush greenery and distinctive
                  architectural designs, distinguishes it as a premier
                  educational institution. Strategically positioned within the
                  educational hub near the Yamuna Expressway in Gautam Budh
                  Nagar, Greater Noida.
                </p>
                <p>
                  NIU achieved recognition for its academic prowess by receiving
                  the highest score of{" "}
                  <span className="text-cyan-400 font-bold">
                    3.44 out of 4 with Grade A+
                  </span>{" "}
                  in the first cycle of NAAC accreditation, outperforming all
                  other private state universities in India. This honor was
                  bestowed by the prestigious autonomous institution under the
                  UGC, Ministry of Education, Government of India.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Organising;
