'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import shaktiLogo from "/assets/images/CSF-Logo.png";
// import webhackLogo from "/assets/logo/webhack.jpg";

const Footer = () => {
  const pathname = usePathname();
  const isAdmin = pathname === "/contact/csf/admin";

  return (
    <footer
      className={`bg-[#03040a] border-t border-white/5 pt-16 pb-8 relative z-50 overflow-hidden ${isAdmin ? "lg:ml-72" : ""}`}
    >
      {/* Background Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-50%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/logo/webhack.jpg"
                alt="Webhack Solutions"
                className="h-16 w-auto rounded-md"
              />
            </div>
            <p className="text-gray-400 max-w-sm font-light">
              Webhack Solutions is a leading digital media and marketing agency
              specializing in innovative solutions that drive real results.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Conference", path: "/conference" },
                { name: "Registration", path: "/conference/register" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-light">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-cyan-400"></i>
                <span>
                  8-12-97/2 TNGO's Colony, Hyderabad, Telangana 500077, India
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-cyan-400"></i>
                <a
                  href="mailto:info@cybershakti.in"
                  className="hover:text-white transition-colors"
                >
                  info@webhacksolution.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-cyan-400"></i>
                <a
                  href="mailto:cybershakti.in@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  webhacksolution@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; 2022 Webhack Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/cyberzero-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/cyber_shakti_foundation?igsh=NGx4a20wcmtzcDZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com/@cyberzero-g2x?si=9u8VqyrQ0xjz_2tk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
