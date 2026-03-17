'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem('lastPayment');
    if (data) {
      setPaymentData(JSON.parse(data));
    } else {
      router.push("/");
    }
  }, [router]);

  if (!paymentData) return null;

  const { paymentId, orderId, amount, type, userDetails } = paymentData;

  return (
    <div className="min-h-screen bg-[#03040a] text-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#0b0d14] border border-green-500/30 rounded-3xl p-8 md:p-12 max-w-lg w-full text-center shadow-[0_0_50px_rgba(34,197,94,0.2)] relative z-10"
      >
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Payment Successful!</h2>
        <p className="text-gray-400 mb-8">
          Thank you <span className="text-cyan-400 font-semibold">{userDetails?.name}</span>. Your payment for <span className="text-purple-400 font-semibold">{type}</span> has been processed successfully.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-500 text-sm">Payment ID</span>
            <span className="text-white font-mono text-sm">{paymentId}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-500 text-sm">Order ID</span>
            <span className="text-white font-mono text-sm">{orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Amount Paid</span>
            <span className="text-green-400 font-bold text-lg">₹ {amount}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button onClick={() => router.push("/")} className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/20">Return to Home</button>
          <button onClick={() => router.push("/profile")} className="w-full py-4 bg-white/5 text-gray-300 font-bold rounded-xl border border-white/10">View Dashboard</button>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
