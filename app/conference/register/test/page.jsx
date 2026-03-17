'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRegistrationStore } from "../../../../store/useRegistrationStore";

const TestRegistration = () => {
  const router = useRouter();
  const { updateRegistration } = useRegistrationStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "Test User",
    email: "test@example.com",
    phone: "9999999999",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Update global registration state
    updateRegistration({
      amount: 1,
      type: "Test Pass",
      userDetails: {
        ...formData,
      },
      originPage: "Test",
    });

    // Navigate to payment
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <img src="/assets/Logo X.png" alt="Logo" className="w-auto h-20 mx-auto mb-8" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            ₹1 Test Registration
          </h1>
          <p className="text-gray-400 mt-4">For testing the payment gateway integration</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0b0d14] border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98]"
            >
              {isSubmitting ? "Processing..." : "Pay ₹1 Now"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default TestRegistration;
