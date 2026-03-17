'use client';
import React from "react";
import { motion } from "framer-motion";

const OrganizerCard = ({
  logo,
  orgName,
  orgContent,
  personImg,
  personName,
  personTitle,
  personSubtitle,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative group w-full bg-gradient-to-br from-[#0b0d14] to-[#12141c] border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
  >
    {/* Background Effects */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    <div className="absolute -top-48 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
    <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-500"></div>

    <div className="flex flex-col md:flex-row h-full relative z-10">
      {/* Left: Organization Info */}
      <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-lg group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            <img
              src={logo}
              alt={orgName}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {orgName}
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="text-gray-300 leading-relaxed text-lg space-y-4 font-light">
          {orgContent}
        </div>
      </div>

      {/* Right: Person Image */}
      <div className="md:w-2/5 relative min-h-[400px] md:min-h-[500px] overflow-hidden bg-black/50">
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/50 to-transparent z-10"></div>
        <img
          src={personImg}
          alt={personName}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute bottom-0 left-0 w-full p-8 z-20">
          <div className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-1">{personName}</h3>
            <p className="text-cyan-400 font-bold uppercase tracking-wider text-sm mb-1">
              {personTitle}
            </p>
            {personSubtitle && (
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                {personSubtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const OrganizingCommittee = () => {
  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Organizing Committee
            </span>
          </motion.h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </div>

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {/* Card 1: Webhack -> Arya Tyagi */}
          <OrganizerCard
            logo="/assets/logo/webhack.jpg"
            orgName="WEBHACK"
            orgContent={
              <>
                <span className="text-cyan-400 font-bold">
                  Webhack Solutions Private Limited
                </span>
                , founded and led by CEO{" "}
                <span className="text-white font-bold">Arya Tyagi</span>, is a
                next-generation digital solutions company established in 2020
                that specializes in cybersecurity services, digital marketing,
                and media & branding.
              </>
            }
            personImg="/assets/Member/Arya Tyagi.jpeg"
            personName="Arya Tyagi"
            personTitle="Founder"
            personSubtitle="WEBHACK SOLUTIONS"
          />

          {/* Card 2: CSF -> Anmol Kumar */}
          <OrganizerCard
            logo="/assets/logo/CSF.png"
            orgName="CSF"
            orgContent={
              <>
                The{" "}
                <span className="text-cyan-400 font-bold">
                  Cyber Shakti Foundation
                </span>{" "}
                advances cybersecurity awareness, digital safety, and
                empowerment in India. It educates citizens on online threats,
                cyber laws, and digital rights. Led by President{" "}
                <span className="text-white font-bold">Anmol Kumar</span>, a
                cybersecurity researcher and criminologist, the foundation
                drives national campaigns and training to build a resilient
                digital ecosystem.
              </>
            }
            personImg="/assets/Member/Anmol3.webp"
            personName="Mr. Anmol Kumar"
            personTitle="President & Director"
            personSubtitle="Cyber Shakti Foundation"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
