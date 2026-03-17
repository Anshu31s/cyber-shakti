'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { submitRegistration, verifyPayment } from "../../utils/api";
import { toast } from "react-toastify";
import { useRegistrationStore } from "../../store/useRegistrationStore";

const EASEBUZZ_LINKS = {
    "Student": "https://smartpay.easebuzz.in/240209/c1549d42de8543d6a78b835a41f6ac2b",
    "Delegate": "https://smartpay.easebuzz.in/240209/12458912748d46af9074758db00840d8",
    "Student Team": "https://smartpay.easebuzz.in/240209/630664425b03490c810a5eee7b2e587e",
    "Delegate Team": "https://smartpay.easebuzz.in/240209/1b0a1810b5b84e4e81f22071bd643405"
};

const Payment = () => {
  const router = useRouter();
  const { registrationData, resetRegistration } = useRegistrationStore();
  const { amount, type, userDetails, originPage } = registrationData;
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!amount) {
      toast.error("No registration data found. Please register first.");
      router.push("/conference/register");
    }
  }, [amount, router]);

  const handlePayment = async () => {
    if (!amount) return;

    setIsProcessing(true);

    try {
      // 1. Submit Registration to Backend and save photo locally
      const response = await submitRegistration({
        ...userDetails,
        amount,
        participationType: type,
        registrantType: originPage || 'Single',
      });

      if (response.success) {
        toast.success("Registration data saved! Redirecting to payment gateway...");
        
        // 2. Identify the correct Easebuzz link
        let easebuzzLink = EASEBUZZ_LINKS["Delegate"]; // Default
        
        if (originPage === "Student") {
            easebuzzLink = EASEBUZZ_LINKS["Student"];
        } else if (originPage === "Delegate") {
            easebuzzLink = EASEBUZZ_LINKS["Delegate"];
        } else if (originPage === "Team") {
            const isStudentTeam = userDetails.participationType?.includes("Student") || userDetails.role === "Student";
            easebuzzLink = isStudentTeam ? EASEBUZZ_LINKS["Student Team"] : EASEBUZZ_LINKS["Delegate Team"];
        }

        // We'll reset registration before redirecting
        resetRegistration();
        
        // 3. Redirect to Easebuzz
        window.location.href = easebuzzLink;
      } else {
        throw new Error("Failed to save registration data.");
      }

    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error(error.message || "Failed to initialize payment.");
      setIsProcessing(false);
    }
  };

  if (!amount) return null;

  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase">
          Complete Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Registration</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#0b0d14] border border-white/10 rounded-3xl p-8 h-fit shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            <h3 className="text-xl font-bold text-white mb-6">🧾 Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-gray-400"><span>Pass Category</span><span className="text-white font-bold">{type}</span></div>
              <div className="flex justify-between items-center text-gray-400"><span>Attendee Name</span><span className="text-white font-bold">{userDetails?.name || "Guest"}</span></div>
              <div className="my-4 border-t border-white/10"></div>
              <div className="flex justify-between items-center text-2xl font-black">
                <span className="text-gray-300">Total Due</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">₹{amount}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-[#0b0d14] border border-white/10 rounded-3xl p-8 flex flex-col justify-center relative shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            <h3 className="text-xl font-bold text-white mb-4">Complete Payment</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Click the button below to submit your details and proceed to the secure Easebuzz payment gateway.</p>
            <button onClick={handlePayment} disabled={isProcessing} className="w-full py-5 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] disabled:opacity-50">
              {isProcessing ? "Submitting..." : `Confirm & Pay ₹${amount} →`}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
