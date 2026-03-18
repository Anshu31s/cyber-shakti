'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NetworkLog from "../../../../components/NetworkLog";
import { toast } from "react-toastify";
import LocationSelector from "../../../../components/LocationSelector";
import { useRegistrationStore } from "../../../../store/useRegistrationStore";

const DelegateRegistration = () => {
  const router = useRouter();
  const { updateRegistration } = useRegistrationStore();
  const [dragActive, setDragActive] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    company: "",
    designation: "",
    sector: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("delegateFormData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (parsedData.timestamp && Date.now() - parsedData.timestamp < 6 * 60 * 60 * 1000) {
          setFormData(parsedData.data);
        } else {
          localStorage.removeItem("delegateFormData");
        }
      } catch (error) {
        console.error("Failed to parse saved form data", error);
      }
    }
  }, []);

  useEffect(() => {
    const dataToStore = {
      data: formData,
      timestamp: Date.now(),
    };
    localStorage.setItem("delegateFormData", JSON.stringify(dataToStore));
  }, [formData]);

  const validateField = (name, value) => {
    let error = "";
    const requiredFields = ["name", "phone", "gender", "email", "addressLine1", "country", "state", "city", "zipCode", "company", "designation", "sector"];
    if (requiredFields.includes(name) && !value) {
      error = "This field is required";
    }
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      error = "Please enter a valid email address";
    }
    if (name === "phone" && value && !/^\+?[\d\s-]{10,}$/.test(value)) {
      error = "Please enter a valid phone number";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      setSelectedFile(file);
      toast.success("File uploaded successfully");
    }
  };

  const handleSubmit = async () => {
    const requiredFields = ["name", "phone", "gender", "email", "addressLine1", "country", "state", "city", "zipCode", "company", "designation", "sector"];
    const newErrors = {};
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched(requiredFields.reduce((acc, curr) => ({ ...acc, [curr]: true }), {}));

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    if (!selectedRole) {
      toast.error("Please select a participation type.");
      return;
    }

    if (!acceptedTerms) {
      toast.warning("Please accept the terms and conditions.");
      return;
    }

    if (!selectedFile) {
      toast.error("Please upload your photo.");
      return;
    }

    setIsSubmitting(true);
    try {
      let fileData = null;
      if (selectedFile) {
        const convertToBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          });
        };
        fileData = await convertToBase64(selectedFile);
      }

      const payload = {
        ...formData,
        participationType: selectedRole,
        fileName: selectedFile ? selectedFile.name : null,
        fileData: fileData,
      };

      toast.success("Delegate registration prepared! Redirecting to payment...");
      localStorage.removeItem("delegateFormData");
      
      updateRegistration({
        amount: 1499,
        type: "Delegate Pass",
        userDetails: payload,
        originPage: "Delegate",
      });

      router.push("/payment");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave" || e.type === "drop") setDragActive(false);
    
    if (e.type === "drop" && e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.size > 5 * 1024 * 1024) {
          toast.error("File size must be less than 5MB");
          return;
        }
        setSelectedFile(file);
        toast.success("File uploaded successfully");
    }
  };

  const getInputClass = (fieldName, themeColor = "purple") => {
    const baseClass = "w-full bg-[#151925] border rounded-lg px-4 py-3 text-white focus:outline-none transition-all placeholder-gray-600";
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClass} border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500`;
    }
    return `${baseClass} border-gray-700/50 focus:border-${themeColor}-500 focus:ring-1 focus:ring-${themeColor}-500`;
  };

  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-24 pb-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#050614] via-[#03040a] to-[#020308]"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/conference" className="hover:text-purple-400 transition-colors">Conference</Link>
          <span className="mx-2">/</span>
          <Link href="/conference/register" className="hover:text-purple-400 transition-colors">Register</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Delegate</span>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-sans tracking-tight uppercase"
          >
            <span className="block text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Delegate Registration</span>
          </motion.h1>
          <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto mb-8">Webhack Solutions – #1 Digital Media and Marketing Agency</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:col-span-1 relative">
            <div className="sticky top-32 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#0b0d14]/60 backdrop-blur-xl border-l-4 border-purple-500 rounded-r-xl p-8 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
              >
                  <div className="space-y-6">
                      <div className="group">
                          <h3 className="text-purple-400 font-bold text-lg tracking-wide uppercase">1. Priority Process</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">Delegate registrations receive priority processing.</p>
                      </div>
                      <div className="group">
                          <h3 className="text-yellow-500 font-bold text-lg tracking-wide uppercase">2. Exclusive Access</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">Enjoy access to exclusive networking sessions and the VIP lounge area.</p>
                      </div>
                  </div>
              </motion.div>
              <NetworkLog />
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#0d101b]/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative"
            >
              <div className="text-center mb-10">
                <img src="/assets/Logo X.png" alt="Logo" className="w-64 h-auto mx-auto mb-4" />
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 mb-2">Delegate Registration</h2>
              </div>

              <form className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Full Name *" className={getInputClass("name")} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Phone Number *" className={getInputClass("phone")} />
                      <select name="gender" value={formData.gender} onChange={handleChange} onBlur={handleBlur} className={getInputClass("gender")}>
                        <option value="">Select Gender *</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email Address *" className={getInputClass("email")} />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Location Information</h3>
                  <div className="space-y-4">
                    <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} onBlur={handleBlur} placeholder="Address Line 1 *" className={getInputClass("addressLine1", "green")} />
                    <LocationSelector formData={formData} setFormData={setFormData} errors={errors} touched={touched} handleBlur={handleBlur} />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Professional Information</h3>
                  <div className="space-y-4">
                    <input type="text" name="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} placeholder="Company Name *" className={getInputClass("company", "indigo")} />
                    <input type="text" name="designation" value={formData.designation} onChange={handleChange} onBlur={handleBlur} placeholder="Designation *" className={getInputClass("designation", "indigo")} />
                    <select name="sector" value={formData.sector} onChange={handleChange} onBlur={handleBlur} className={getInputClass("sector", "indigo")}>
                        <option value="">Select Sector *</option>
                        <option value="Government & Public Sector">Government & Public Sector</option>
                        <option value="Defence & National Security">Defence & National Security</option>
                        <option value="Technology & IT Services">Technology & IT Services</option>
                        <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Participation Type</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Speaker", "Exhibitor", "Volunteer", "Delegate", "Member"].map((type) => (
                      <label key={type} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${selectedRole === type ? "border-purple-500 bg-purple-500/10" : "border-gray-800 bg-[#151925]"}`}>
                        <input type="radio" name="participationType" value={type} checked={selectedRole === type} onChange={() => setSelectedRole(type)} className="w-4 h-4 cursor-pointer" />
                        <span className={`text-sm ${selectedRole === type ? "text-purple-400" : "text-gray-300"}`}>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Document Upload</h3>
                  <div className={`relative border-2 border-dashed rounded-2xl p-10 text-center ${dragActive ? "border-purple-400 bg-purple-400/5" : "border-gray-700 bg-[#151925]"}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrag}>
                    <p className="text-white font-bold">{selectedFile ? selectedFile.name : "Upload Photo (JPG, PNG, max 5MB) *"}</p>
                    <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  </div>
                </div>

                <label className="flex items-start gap-4 p-4 rounded-xl bg-[#151925] border border-gray-800 cursor-pointer">
                  <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="mt-1" />
                  <span className="text-sm text-gray-400">I agree to the Terms & Conditions *</span>
                </label>

                <button type="button" disabled={isSubmitting} onClick={handleSubmit} className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg py-5 rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-50">
                  {isSubmitting ? "Processing..." : "Complete Registration"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelegateRegistration;
