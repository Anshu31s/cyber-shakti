'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NetworkLog from "../../../../components/NetworkLog";
import { toast } from "react-toastify";
import LocationSelector from "../../../../components/LocationSelector";
import { useRegistrationStore } from "../../../../store/useRegistrationStore";

const TeamRegistration = () => {
  const router = useRouter();
  const { updateRegistration } = useRegistrationStore();
  const [selectedRole, setSelectedRole] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    teamSize: 4,
    collegeName: "",
    company: "",
    designation: "",
    sector: "",
    member2: "",
    member3: "",
    member4: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatePrice = () => {
    const unitPrice = selectedRole === "Student" ? 999 : 1499;
    const size = parseInt(formData.teamSize) || 0;
    const paidMembers = size - Math.floor(size / 4);
    return paidMembers * unitPrice;
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && !value) error = "Name is required";
    if (name === "phone" && !value) error = "Phone is required";
    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email";
    }
    if (name === "teamSize") {
      if (!value || value < 2) error = "Min size is 2";
      if (value > 4) error = "Max size is 4";
    }
    if (name.startsWith("member") && formData.teamSize >= parseInt(name.replace("member", ""))) {
      if (!value) error = "Member name is required";
    }
    if (selectedRole === "Student" && name === "collegeName" && !value) error = "Required";
    if (selectedRole === "Delegate" && ["company", "designation", "sector"].includes(name) && !value) error = "Required";
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

  const handleSubmit = async () => {
    const requiredFields = ["name", "phone", "email", "teamSize", "addressLine1", "country", "state", "city", "zipCode"];
    const size = parseInt(formData.teamSize) || 0;
    for (let i = 2; i <= size; i++) requiredFields.push(`member${i}`);
    if (selectedRole === "Student") requiredFields.push("collegeName");
    if (selectedRole === "Delegate") requiredFields.push("company", "designation", "sector");

    const newErrors = {};
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched(requiredFields.reduce((acc, curr) => ({ ...acc, [curr]: true }), {}));

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!selectedRole) {
      toast.error("Please select a registration type.");
      return;
    }
    if (!acceptedTerms) {
      toast.warning("Please accept terms.");
      return;
    }

    if (!selectedFile) {
      toast.error("Please upload your photo.");
      return;
    }

    setIsSubmitting(true);
    try {
      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };
      
      const fileData = await convertToBase64(selectedFile);
      const totalPrice = calculatePrice();
      
      updateRegistration({
        amount: totalPrice,
        type: "Team Pass",
        userDetails: { 
          ...formData, 
          participationType: `${selectedRole} Team`, 
          amount: totalPrice,
          fileName: selectedFile.name,
          fileData: fileData
        },
        originPage: "Team",
      });
      toast.success("Team registration prepared!");
      router.push("/payment");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName, themeColor = "pink") => {
    const baseClass = "w-full bg-[#151925] border rounded-lg px-4 py-3 text-white focus:outline-none transition-all placeholder-gray-600";
    if (errors[fieldName] && touched[fieldName]) return `${baseClass} border-red-500/50 focus:border-red-500`;
    return `${baseClass} border-gray-700/50 focus:border-${themeColor}-500`;
  };

  return (
    <div className="min-h-screen bg-[#03040a] text-white pt-24 pb-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#050614] via-[#03040a] to-[#020308]"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-pink-600/20 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-pink-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/conference" className="hover:text-pink-400">Conference</Link>
          <span className="mx-2">/</span>
          <Link href="/conference/register" className="hover:text-pink-400">Register</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Team</span>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-6">
            <img src="/assets/Logo X.png" alt="Logo" className="w-68 h-auto mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans tracking-tight uppercase">
            <span className="block text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">Team Registration</span>
          </h1>
          <p className="text-gray-300 text-lg">Webhack Solutions – #1 Digital Media and Marketing Agency <br />
            <span className="text-pink-400 font-bold">Buy 3 Get 4 Offer Applied!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:col-span-1 relative">
            <div className="sticky top-32 space-y-6">
              <div className="bg-[#0b0d14]/60 backdrop-blur-xl border-l-4 border-pink-500 rounded-r-xl p-8 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                <h3 className="text-2xl font-bold text-white mb-6">Pricing Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-300"><span>Type</span><span className="text-pink-400 font-bold">{selectedRole || "Select Below"}</span></div>
                  <div className="flex justify-between text-gray-300"><span>Size</span><span className="font-bold">{formData.teamSize} Members</span></div>
                  <div className="h-px bg-gray-700 my-4"></div>
                  <div className="flex justify-between text-white text-xl font-bold"><span>Total Amount</span><span className="text-pink-400">₹{calculatePrice()}</span></div>
                </div>
              </div>
              <NetworkLog />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#0d101b]/80 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(236,72,153,0.15)]">
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-pink-500/30 pb-4">Team Details</h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-pink-400">Team Leader</h3>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClass("name")} placeholder="Full Name *" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={getInputClass("phone")} placeholder="Phone *" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClass("email")} placeholder="Email *" />
                  </div>
                </div>

                {formData.teamSize > 1 && (
                  <div className="space-y-4 pt-4 border-t border-gray-800">
                    <h3 className="text-lg font-semibold text-pink-400">Team Members</h3>
                    {Array.from({ length: Math.min(parseInt(formData.teamSize || 0), 4) - 1 }).map((_, idx) => {
                      const mNum = idx + 2;
                      const fN = `member${mNum}`;
                      return <input key={fN} type="text" name={fN} value={formData[fN]} onChange={handleChange} onBlur={handleBlur} className={getInputClass(fN)} placeholder={`Member ${mNum} Name *`} />;
                    })}
                  </div>
                )}

                <div className="space-y-4 pt-4 border-t border-gray-800">
                  <h3 className="text-xl font-bold text-white pt-4">Configuration</h3>
                  <div className="space-y-4">
                    <input type="number" name="teamSize" min="2" max="4" value={formData.teamSize} onChange={handleChange} onBlur={handleBlur} className={getInputClass("teamSize")} placeholder="Team Size (2-4) *" />
                    <div className="grid grid-cols-2 gap-4">
                      {["Student", "Delegate"].map(r => (
                        <label key={r} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer ${selectedRole === r ? "border-pink-500 bg-pink-500/10" : "border-gray-700 bg-[#151925]"}`}>
                          <input type="radio" name="role" value={r} checked={selectedRole === r} onChange={() => setSelectedRole(r)} className="w-4 h-4" />
                          <span className={selectedRole === r ? "text-pink-400 font-bold" : "text-gray-300"}>{r}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {selectedRole === "Student" && <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} onBlur={handleBlur} className={getInputClass("collegeName")} placeholder="College Name *" />}
                  {selectedRole === "Delegate" && (
                    <div className="space-y-4">
                      <input type="text" name="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} className={getInputClass("company")} placeholder="Company *" />
                      <input type="text" name="designation" value={formData.designation} onChange={handleChange} onBlur={handleBlur} className={getInputClass("designation")} placeholder="Designation *" />
                      <input type="text" name="sector" value={formData.sector} onChange={handleChange} onBlur={handleBlur} className={getInputClass("sector")} placeholder="Sector *" />
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-800">
                  <h3 className="text-xl font-bold text-white pt-4">Billing Location</h3>
                  <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} onBlur={handleBlur} className={getInputClass("addressLine1")} placeholder="Street Address *" />
                  <LocationSelector formData={formData} setFormData={setFormData} errors={errors} touched={touched} handleBlur={handleBlur} />
                </div>

                <div className="space-y-6 pt-4 border-t border-gray-800">
                  <h3 className="text-xl font-bold text-white pt-4">Document Upload</h3>
                  <div className={`relative border-2 border-dashed rounded-2xl p-10 text-center ${dragActive ? "border-pink-400 bg-pink-400/5" : "border-gray-700 bg-[#151925]"}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrag}>
                    <p className="text-white font-bold">{selectedFile ? selectedFile.name : "Upload Photo (JPG, PNG, max 5MB) *"}</p>
                    <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  </div>
                </div>

                <label className="flex items-start gap-3 pt-6 cursor-pointer">
                  <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="mt-1" />
                  <span className="text-sm text-gray-400">I agree to the Terms & Conditions *</span>
                </label>

                <button type="button" onClick={handleSubmit} disabled={isSubmitting || formData.teamSize > 4} className="w-full py-4 bg-linear-to-r from-pink-600 to-rose-600 text-white rounded-xl font-bold text-lg disabled:opacity-50">
                  {isSubmitting ? "Processing..." : "Proceed to Payment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRegistration;
