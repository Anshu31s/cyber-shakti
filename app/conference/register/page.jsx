'use client';
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-white/10 rounded-full px-6 py-2 backdrop-blur-md">
              <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">
                Choose Your Registration Type
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-sans tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Registration Options
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Select the registration type that best fits your participation in
            Webhack Solutions – #1 Digital Media and Marketing Agency
          </motion.p>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-15">
          <img src="/assets/Logo X.png" alt="Logo" className="w-auto h-30" />
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-15"
        >
          <div className="bg-[#0b0d14] border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-4 min-w-[200px]">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className="font-bold text-lg">April 17-18, 2026</span>
          </div>

          <div className="bg-[#0b0d14] border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-4 min-w-[200px]">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span className="font-bold text-lg">Greater Noida</span>
          </div>

          <div className="bg-[#0b0d14] border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-4 min-w-[200px]">
            <div className="bg-pink-500/20 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <span className="font-bold text-lg">10+ Countries</span>
          </div>
        </motion.div>

        {/* Registration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* 1.Student PASS Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0b0d14] border border-cyan-500 rounded-3xl p-10 relative group hover:shadow-[0_0_60px_rgba(34,211,238,0.2)] transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Popular Badge */}
              <div className="absolute -top-4 right-10 bg-orange-500 text-black text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-orange-500/20">
                <span>★</span> EARLYBIRD
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-transform duration-500 group-hover:-translate-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="bg-cyan-900/40 border border-cyan-500/30 px-3 py-1 rounded-full">
                  <span className="text-cyan-400 font-bold text-sm">
                    Student
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">
                STUDENT PASS
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl text-gray-400">₹</span>
                <span className="text-4xl font-bold text-cyan-400">999</span>
                <span className="text-gray-500 text-sm ml-2">/- only</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Access to all Conference Hall",
                  "Access to all Sessions",
                  "Network Opportunities",
                  "Live Interaction with Speaker",
                  "Certificate of Participation",
                  "Goodies & Kit bag",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <svg
                      className="w-5 h-5 text-cyan-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/conference/register/visitor")}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
              >
                Get Pass Now <span>→</span>
              </button>
            </div>
          </motion.div>

          {/*2. Delegate PASS Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#0b0d14] border border-white/10 rounded-3xl p-10 relative group overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.2)] transition-all duration-500 flex flex-col h-full"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 transition-transform duration-500 group-hover:-translate-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="bg-purple-900/40 border border-purple-500/30 px-3 py-1 rounded-full">
                  <span className="text-purple-400 font-bold text-sm">
                    Delegate
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">
                DELEGATE PASS
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl text-gray-400">₹</span>
                <span className="text-4xl font-bold text-purple-400">1499</span>
                <span className="text-gray-500 text-sm ml-2">/- only</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Access to all Conference Hall",
                  "Network Opportunities",
                  "Live Interaction with Speakers",
                  "Certificate of Participation",
                  "Lunch and Snacks",
                  "Priority Seating",
                  "Meet & Greet with Speakers",
                  "Exclusive Networking Session",
                  "Goodies & Kit bag",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <svg
                      className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/conference/register/delegate")}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
              >
                Get Pass Now <span>→</span>
              </button>
            </div>
          </motion.div>

          {/*3. Team Pass Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#0b0d14] border border-pink-500 rounded-3xl p-10 relative group hover:shadow-[0_0_60px_rgba(236,72,153,0.2)] transition-all duration-500 overflow-hidden flex flex-col h-full lg:col-span-2"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Special Badge */}
              <div className="absolute -top-4 right-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-pink-500/20">
                <span>🎁</span> Limited Offer
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/20 transition-transform duration-500 group-hover:-translate-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="bg-pink-900/40 border border-pink-500/30 px-3 py-1 rounded-full">
                  <span className="text-pink-400 font-bold text-sm">Team</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">TEAM PASS</h3>

              <div className="mb-6">
                <span className="text-3xl font-bold text-pink-400">
                  Buy 3 Get 4
                </span>
                <p className="text-gray-400 text-sm mt-1">
                  Pay for 3, Get 1 Free!
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Group Access for 4",
                  "All Conference Benefits",
                  "Networking Opportunities",
                  "Certificate for All Members",
                  "Goodies & Kit bag (x4)",
                  "Team Seating Arrangement",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <svg
                      className="w-5 h-5 text-pink-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/conference/register/team")}
                className="w-full py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
              >
                Get Team Pass <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
