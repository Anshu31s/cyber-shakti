import React, { useState, useEffect } from "react";

const NetworkLog = () => {
  const [logs, setLogs] = useState([
    "Initializing secure connection...",
    "Bypassing firewall protocols...",
    "Analyzing packet header data...",
  ]);

  const possibleLogs = [
    "Establishing encrypted tunnel...",
    "Scanning for vulnerabilities...",
    "Decryption key accepted.",
    "Accessing secure database...",
    "Packet loss detected. Re-routing...",
    "Neural link synchronized.",
    "Trace detected. Deploying decoys...",
    "Mainframe connection stable.",
    "Bypassing biometric security...",
    "Injection successful.",
    "Data extraction in progress...",
    "Cleaning system logs...",
    "Port 80 traffic isolated.",
    "SSH handshake initiated.",
    "SSL certificate verified.",
    "Memory leak patched.",
    "Query optimization complete.",
    "API endpoint secured."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLog = possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
        const newLogs = [...prev, nextLog];
        return newLogs.slice(-10); // Keep last 10 logs
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/80 rounded-xl p-4 border border-white/10 font-mono text-xs text-cyan-500/80 h-72 overflow-hidden shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
        <span className="text-[10px] opacity-40 ml-2 uppercase tracking-widest font-bold">Mainframe_Console v4.2</span>
      </div>
      <div className="space-y-1.5">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-3">
            <span className="opacity-20 tabular-nums">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
            <span className={i === logs.length - 1 ? "text-cyan-400 animate-pulse" : "text-cyan-600/70"}>
              <span className="mr-2 text-cyan-800">$</span>
              {log}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkLog;
