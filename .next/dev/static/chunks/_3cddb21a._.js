(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/speakers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSpeakerImageUrl",
    ()=>getSpeakerImageUrl,
    "speakersData",
    ()=>speakersData
]);
const speakersData = [
    {
        name: "Lt General (Dr.) Rajesh Pant",
        title: "India's 2nd National Cybersecurity Coordinator",
        imageFile: "Rajesh-Pant.jpg"
    },
    {
        name: "Lt. Col. Mr. Santosh Khadsare",
        title: "Chief Business Officer at SysTools",
        imageFile: "Lt Col Santosh Khadsare.jpg"
    },
    {
        name: "Dr. Gaurav Gupta",
        title: "Additional Director/Scientist 'E' at the Ministry of Electronics & Information Technology (MeitY)",
        imageFile: "Dr. Gaurav Gupta.jpg"
    },
    {
        name: "Mr. Rushi Mehta",
        title: "Senior Program Manager Indian Cyber Crime Coordination Centre, Ministry of Home Affairs, Government of India",
        imageFile: "Rushi.png"
    },
    {
        name: "Dr. Varun Kapoor (IPS)",
        title: "DG of Police Madhya Pradesh",
        imageFile: "IPS Varun Kapoor.jpg"
    },
    {
        name: "Sanjay Kundu IPS (Retired)",
        title: "Director General of Police, Himachal Pradesh (Retired)",
        imageFile: "IPS Sanjay Kundu.jpg"
    },
    {
        name: "Ashok Kumar IPS (Retired)",
        title: "Former IPS , Vice-Chancellor at Sports University of Haryana",
        imageFile: "IPS Ashok Kumar.jpg"
    },
    {
        name: "Om Prakash (O.P.) Singh IPS",
        title: "DGP of Haryana",
        imageFile: "IPS O P Singh.webp"
    },
    {
        name: "Prof. Triveni Singh IPS (Retired)",
        title: "Chief Mentor FCFR Ex-IPS ",
        imageFile: "IPS Triveni Singh.jpg"
    },
    {
        name: "Mr. Shakti Awasthi IPS",
        title: "",
        imageFile: "IPS Shakti avasthi.avif"
    },
    {
        name: "Ms.Preeti Yadav IPS",
        title: "Addl. DCP Police Commissionerate Gautam B. Nagar",
        imageFile: "IPS Preeti yadav.jpg"
    },
    {
        name: "Dr. Vinny Sharma",
        title: "Professor, Forensic Science & Associate Dean Students' Welfare, at Galgotiya University",
        imageFile: "Dr. Mrs Vinny Sharma.jpg"
    },
    {
        name: "Dr. Pavan Duggal",
        title: "Adv. at Supreme Court of India / Founder & Chairman of International Commission on Cyber Security Law",
        imageFile: "Dr. Pavan Duggal.webp"
    },
    {
        name: "Dr. Rakshit Tandon",
        title: "Consultant - Cyber Crime HQ UP Police & International Cyber Expert",
        imageFile: "Rakshit Tandon.jpg"
    },
    {
        name: "Raul (Raultherockstar) John Aju",
        title: "Founder AI Realm, Thinkcraft Acadamy 400000+ Learners Worked With Gov",
        imageFile: "Rahul AI.jpg"
    },
    {
        name: 'Prof. Amit Dubey "Cyber Dubey"',
        title: "Security expert, cybersecurity researcher, and author",
        imageFile: "Amit Dubey (Cyberdubey).jpeg"
    },
    {
        name: "DR. DEEPAK (D3) FORENSICS",
        title: "Sr Technical Manager (Cyber Intelligence & Forensics)",
        imageFile: "DR. DEEPAK (D3) FORENSICS.jpg"
    },
    {
        name: "Ms. Shonal",
        title: "Anti-Cybercrime Strategist & Cyber Psychology Practitioner",
        imageFile: "Ms. Shonal.jpeg"
    },
    {
        name: "Mr. RK Narang (Retd.)",
        title: "Veteran Indian Air Force (IAF) helicopter pilot, strategic aviation expert, and academic",
        imageFile: "RK Narang PhD.jpg"
    },
    {
        name: "Mr. Tushar Sharma",
        title: "Lawyer, Cyber Researcher, Cyber Hygiene Practitioner, Master Trainer - Cyber",
        imageFile: "Tushar Sharma.jpg"
    },
    {
        name: "Mr. Samir Datt",
        title: "Founder CEO, ForensicsGuru.com",
        imageFile: "Samir Datt.jpg"
    },
    {
        name: 'Dr. Lalit Gupta "The Cyber Doctor"',
        title: "President Cyber Security Council for India",
        imageFile: "Dr. Lalit Gupta.webp"
    },
    {
        name: "Mr. Dipanshu Parashar",
        title: "CEO- Virtual Cyber Labs",
        imageFile: "Dipanshu Parasha.jpg"
    },
    {
        name: "Mr. Saket Pandey",
        title: "CyberSecurity Consultant | Cyber Crime Investigator",
        imageFile: "Saket Pandey.jpg"
    },
    {
        name: "Dr. Mr. OoPpSs",
        title: "Captain of Offensive Security Services & Digital Forensic",
        imageFile: "Mr Oops.jpg"
    },
    {
        name: "Ms. Rishika Desai",
        title: "Security Analyst Mid @BforeAI",
        imageFile: "Rishika Desai.jpg"
    },
    {
        name: "Mr. Sunny Nehra",
        title: "Founder at Secure Your Hacks",
        imageFile: "Sunny Nehra.jpg"
    },
    {
        name: "Mr. Piyush Kaushik",
        title: "DFIR | Product Manager at Exterro",
        imageFile: "Piyush Kaushik.jpg"
    },
    {
        name: 'Mr. Yugal Pathak "CyberYuvi"',
        title: "Cyber Forensic Examiner",
        imageFile: "Yugal Pathak.jpg"
    },
    {
        name: "Mr. Akshay Kumar Jadhav",
        title: "Cyber Security Advisor LEA & Crime Investigator & Faculty Legal Consultant",
        imageFile: "Akshay Kumar Jadhav.jpg"
    },
    {
        name: "Mr. Rupesh Mittal",
        title: "Founder of Cyber Jagrithi Foundation / Advocate",
        imageFile: "Rupesh Mittal.jpeg"
    },
    {
        name: "Mr. Nitin Pandey",
        title: "Indian cybersecurity expert and cyber intelligence professional",
        imageFile: "Mr Nitin Pandey.jpeg"
    },
    {
        name: "Mr. Biswajeet Ray",
        title: "Security Professional | Penetration Tester | Security Researcher | OSINT & Threat Intelligence",
        imageFile: "Biswajeet Ray.jpeg"
    },
    {
        name: "Mr. Nanda Kumar Kirubakaran",
        title: "GenAI Product-Focused Leader | 23+ Yrs in Cybersecurity & Product Dev | Now Building Secure GenAI Solutions",
        imageFile: "Archana Nandakumar.jpeg"
    },
    {
        name: "Ms. Archana Nandakumar",
        title: "Cybersecurity Evangelist | SOC & Incident Management Leader | Speaker & Mentor | NASSCOM SIG ",
        imageFile: "archna.jpeg"
    }
];
const getSpeakerImageUrl = (imageFile)=>{
    if (!imageFile) return null;
    return `/assets/Speakers/${imageFile}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SpeakerCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const SpeakerCard = ({ name, title, imageSrc, delay = 0 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            delay: delay,
            duration: 0.5
        },
        className: "group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#3430bf] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            }, void 0, false, {
                fileName: "[project]/components/SpeakerCard.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col h-full pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight mb-2",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/SpeakerCard.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-gray-500 group-hover:text-blue-200 transition-colors duration-300 line-clamp-3",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/SpeakerCard.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SpeakerCard.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto relative w-full h-[220px] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-full h-[150px] bg-[#3430bf] rounded-t-[100%] scale-x-[1.5] translate-y-4 group-hover:translate-y-8 transition-transform duration-500"
                            }, void 0, false, {
                                fileName: "[project]/components/SpeakerCard.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-end justify-center pb-0",
                                children: imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageSrc,
                                    alt: name,
                                    className: "w-48 h-48 object-cover rounded-full border-4 border-white group-hover:border-[#3430bf]/20 shadow-lg group-hover:scale-110 transition-transform duration-500 origin-bottom mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/SpeakerCard.jsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : // Fallback Initial
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white mb-6 group-hover:bg-white/10 group-hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl text-gray-400 font-bold group-hover:text-white",
                                        children: name.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SpeakerCard.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/SpeakerCard.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/SpeakerCard.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SpeakerCard.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/SpeakerCard.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/SpeakerCard.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SpeakerCard;
const __TURBOPACK__default__export__ = SpeakerCard;
var _c;
__turbopack_context__.k.register(_c, "SpeakerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/conference/speakers/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$speakers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/speakers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpeakerCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SpeakerCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Speakers = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Ensure we scroll to top on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Speakers.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["Speakers.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#03040a] text-white pt-32 pb-20 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/conference/speakers/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/conference"),
                        className: "mb-8 flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors uppercase tracking-widest text-sm font-bold group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-hover:-translate-x-1 transition-transform",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/app/conference/speakers/page.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/conference/speakers/page.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-4xl md:text-6xl font-bold mb-4 font-sans tracking-tight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500",
                                    children: "Distinguished Speakers"
                                }, void 0, false, {
                                    fileName: "[project]/app/conference/speakers/page.js",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/conference/speakers/page.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-32 bg-cyan-500 rounded-full mx-auto shadow-[0_0_10px_#22d3ee]"
                            }, void 0, false, {
                                fileName: "[project]/app/conference/speakers/page.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/conference/speakers/page.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$speakers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakersData"].map((speaker, i)=>{
                            const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$speakers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpeakerImageUrl"])(speaker.imageFile);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SpeakerCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: speaker.name,
                                title: speaker.title,
                                imageSrc: imageSrc,
                                delay: i * 0.05
                            }, i, false, {
                                fileName: "[project]/app/conference/speakers/page.js",
                                lineNumber: 50,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/conference/speakers/page.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/conference/speakers/page.js",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/conference/speakers/page.js",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Speakers, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Speakers;
const __TURBOPACK__default__export__ = Speakers;
var _c;
__turbopack_context__.k.register(_c, "Speakers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3cddb21a._.js.map