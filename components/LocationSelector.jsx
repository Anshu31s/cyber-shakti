'use client';
import React from 'react';

const LocationSelector = ({ formData, setFormData, errors, touched, handleBlur }) => {
    
    const countries = ["India", "USA", "UK", "Canada", "Australia", "Germany", "France", "Japan", "Singapore", "UAE"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const getInputClass = (fieldName) => {
        const baseClass = "w-full bg-[#151925] border rounded-lg px-4 py-3 text-white focus:outline-none transition-all placeholder-gray-600 appearance-none";
        if (errors[fieldName] && touched[fieldName]) {
            return `${baseClass} border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500`;
        }
        return `${baseClass} border-gray-700/50 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500`;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Country <span className="text-red-500">*</span></label>
                <div className="relative">
                    <select 
                        name="country" 
                        value={formData.country} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        className={getInputClass('country')}
                    >
                        <option value="">Select Country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                {errors.country && touched.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">State <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    name="state" 
                    value={formData.state} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    placeholder="Enter state"
                    className={getInputClass('state')}
                />
                {errors.state && touched.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">City <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    placeholder="Enter city"
                    className={getInputClass('city')}
                />
                {errors.city && touched.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Zip Code <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    name="zipCode" 
                    value={formData.zipCode} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    placeholder="Enter zip code"
                    className={getInputClass('zipCode')}
                />
                {errors.zipCode && touched.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
            </div>
        </div>
    );
};

export default LocationSelector;
