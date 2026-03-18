'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { speakersData, getSpeakerImageUrl } from "../../lib/speakers";
import SpeakerCard from "../../components/SpeakerCard";

const Conference = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("April 17, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative text-white">
      {/* Full Screen Background Image */}
      <div className="absolute top-0 left-0 w-full h-[110vh] z-[-1]">
        <img
          src="/assets/niu.jpeg"
          alt="Conference Background"
          className="w-full h-full object-cover"
        />
        {/* Lighter Gradient Overlay for better visibility of the background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0b0d14]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)] opacity-40"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-40 mb-24 items-center">
          {/* Left Content - Cyber Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left relative z-10"
          >
            {/* Decorative Tech Line */}
            <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden xl:block"></div>

            <div className="relative overflow-hidden inline-flex items-center gap-3 px-6 py-3 rounded-lg border-2 border-cyan-400 bg-black/70 backdrop-blur-xl mb-8 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all duration-300 group">
              <style>{`
                @keyframes light-sweep {
                  0% { transform: translateX(-150%) skewX(-20deg); }
                  50% { transform: translateX(150%) skewX(-20deg); }
                  100% { transform: translateX(150%) skewX(-20deg); }
                }
              `}</style>

              {/* Light Sweep Effect */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-0 pointer-events-none"
                style={{ animation: "light-sweep 6s infinite ease-in-out" }}
              ></div>

              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee] relative z-10"></span>
              <span className="text-white font-mono text-base font-black tracking-[0.15em] uppercase drop-shadow-md relative z-10">
                Global Cyber Suraksha Conclave '26
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-8 font-sans tracking-tight leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              <span className="text-white relative">
                Emerging Challenges in Cyber Security,
                <svg
                  className="absolute -bottom-2 right-0 w-1/3 h-2 text-cyan-500"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 0 L100 0 L100 10 L80 10 L70 0 Z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                </svg>
              </span>{" "}
              <br />
              <span className="text-5xl md:text-6xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 filter drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">
                Digital Forensics & Agri Security
              </span>
            </h1>

            <div className="mb-10 max-w-xl bg-[#0b0d14]/50 backdrop-blur-md border-l-4 border-cyan-500 p-6 rounded-r-xl shadow-lg">
              <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
                Join the world's most elite{" "}
                <strong className="text-cyan-400 font-semibold">
                  cybersecurity professionals
                </strong>
                ,{" "}
                <strong className="text-cyan-400 font-semibold">
                  ethical hackers
                </strong>
                , and{" "}
                <strong className="text-cyan-400 font-semibold">
                  policy makers
                </strong>{" "}
                for a transformative summit.
              </p>
            </div>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg">
              <div className="flex items-center gap-4 p-3 border border-white/10 bg-black/40 rounded-lg backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-cyan-900/30 text-cyan-400 text-xl border border-cyan-500/20">
                  📅
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                    Date
                  </div>
                  <div className="text-white font-mono text-sm">
                    April 17-18, 2026
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 border border-white/10 bg-black/40 rounded-lg backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-purple-900/30 text-purple-400 text-xl border border-purple-500/20">
                  📍
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                    Location
                  </div>
                  <div className="text-white font-mono text-sm">
                    Greater Noida
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/conference/register")}
                className="group relative px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg clip-path-polygon transition-all flex items-center gap-3 overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                <span>REGISTER NOW</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Cyber Countdown Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative lg:w-[70%] ml-auto"
          >
            <div
              className="relative bg-[#0b0d14]/70 backdrop-blur-2xl border border-cyan-500/30 p-8 shadow-[0_0_50px_rgba(6,182,212,0.1)] clip-path-polygon"
              style={{
                clipPath:
                  "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
              }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50"></div>

              <div className="text-center mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                <h3 className="relative inline-block bg-[#0b0d14] px-4 text-cyan-400 font-bold text-xl tracking-[0.2em] uppercase">
                  Event Launch
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-10">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HRS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative bg-[#151925] border border-cyan-900/50 py-4 sm:py-6 mb-2 overflow-hidden group-hover:border-cyan-500/50 transition-colors">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
                      <span className="text-2xl sm:text-4xl font-black font-mono text-white">
                        {item.value}
                      </span>
                    </div>
                    <span className="text-[10px] text-cyan-500/70 font-bold uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Bar Area */}
              <div className="bg-[#151925]/50 p-6 border-t border-white/5">
                <div className="flex justify-between items-end mb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                      Capacity Status
                    </h4>
                  </div>
                  <span className="text-cyan-400 text-xs font-mono">
                    90% FILLED
                  </span>
                </div>
                <div className="w-full bg-gray-800 h-1.5 overflow-hidden">
                  <div className="bg-cyan-500 h-1.5 w-[90%] shadow-[0_0_10px_rgba(6,182,212,0.5)] relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/5 bg-[#151925]/30">
                <div className="p-4 text-center">
                  <div className="text-xl font-bold text-white font-mono">
                    1.1k
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                    Total
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-xl font-bold text-white font-mono">
                    1k
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                    Sold
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-xl font-bold text-orange-400 font-mono">
                    76
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                    Left
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "AI in Cyber Security",
              desc: "Exploring the dual-edged sword of Artificial Intelligence in digital defense.",
              icon: "🤖",
              color: "cyan",
            },
            {
              title: "Cyber Crime & Law",
              desc: "Bridging the gap between technology and legal frameworks for safer societies.",
              icon: "⚖️",
              color: "purple",
            },
            {
              title: "Future of Forensics",
              desc: "Next-gen tools and techniques for digital evidence recovery and analysis.",
              icon: "🔍",
              color: "pink",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0f111a]/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 hover:bg-[#1a1f35] transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform ${
                  item.color === 'cyan' ? 'bg-cyan-500/10' : item.color === 'purple' ? 'bg-purple-500/10' : 'bg-pink-500/10'
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid - Glass Bar Style */}
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-2">
                10+
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Participating Countries
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600 mb-2">
                1500+
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Expected Delegates
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-red-600 mb-2">
                200+
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Expert Speakers
              </div>
            </div>
          </div>
        </div>


        {/* Organizer */}
        <div className="mb-24">
          <div className="flex flex-col xl:flex-row justify-center gap-8 xl:gap-12">
          </div>
        </div>

        {/* Speakers Section - Marquee Style */}
        {/* <div className="mb-24 overflow-hidden relative">
          <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 80s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

          <div className="flex items-center justify-between mb-12 px-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Keynote Speakers</h2>
              <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>
          </div> */}

          <div className="relative w-full overflow-hidden">
            {/* Gradient Masks for smooth fade edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#03040a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#03040a] to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee w-fit gap-8 py-4">
              {[...speakersData, ...speakersData].map((speaker, i) => {
                const imageSrc = getSpeakerImageUrl(speaker.imageFile);

                return (
                  <div key={i} className="min-w-[280px] w-[280px]">
                    <SpeakerCard
                      name={speaker.name}
                      title={speaker.title}
                      imageSrc={imageSrc}
                      delay={0}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
