'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
// import shaktiLogo from "/assets/images/CSF-Logo.png";
// import webhackLogo from "/assets/logo/webhack.jpg";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [imgError, setImgError] = useState({});
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    router.push("/");
  };

  const isConferencePage =
    pathname.startsWith("/conference") ||
    pathname.startsWith("/payment");

  const navLinks = [
    {
      name: "Conference",
      path: "/conference",
      end: true,
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Paper Publication",
      path: "/conference/paper-publication",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      name: "Agenda",
      path: "/conference/agenda",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Speaker",
      path: "/conference/speakers",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
    },
    {
      name: "Organization",
      path: "/conference/organization",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      dropdown: [
        {
          name: "Organizing Committee",
          path: "/conference/committee",
        },
      ],
    },
  ];

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <a
              href="https://webhacksolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="h-10 md:h-15 lg:h-15 w-auto rounded-sm md:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] md:hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-300"
                src="/assets/logo/webhack.jpg"
                alt="Webhack Solutions"
              />
            </a>
            <div className="h-8 w-[2px] bg-white/50 hidden md:block"></div>
            <img
              className="h-10 md:h-12 xl:h-16 w-auto md:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] md:hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-300"
              src="/assets/images/CSF-Logo.png"
              alt="Cyber Shakti"
            />
          </div>

          {/* Center Desktop Menu (Pill) */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <div className="flex items-center bg-[#151b2b] border border-white/10 rounded-full p-1 pl-2 pr-2 gap-1 shadow-lg">
              {navLinks.map((item) => {
                const isActive = pathname === item.path || (item.dropdown && item.dropdown.some(d => pathname === d.path));
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.path}
                      className={`flex items-center gap-1 xl:gap-2 px-2 py-1 xl:px-4 xl:py-2 rounded-full text-[10px] xl:text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#3b5dff] text-white shadow-[0_0_15px_rgba(59,93,255,0.4)]"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                    <span className="hidden xl:inline">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <svg
                        className="w-3 h-3 ml-1 opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl bg-[#0e1324] border border-white/10 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                              pathname === subItem.path
                                ? "text-[#3b5dff] bg-blue-500/10"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            </div>
          </div>

            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {!isConferencePage && (
              <button
                onClick={() => router.push("/conference")}
                className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white text-[10px] xl:text-sm font-bold py-1.5 px-3 xl:py-2 xl:px-6 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                  Registration
                </span>
              </button>
            )}

            <div>
              {isConferencePage &&
              (pathname.includes("/conference/register") ||
                pathname.startsWith("/payment")) ? (
                <button
                  onClick={() => router.push("/conference")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </span>
                </button>
              ) : isConferencePage ? (
                <button
                  onClick={() => router.push("/conference/register")}
                  className="bg-[#00c988] hover:bg-[#00a872] text-white text-sm font-bold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                >
                  Get Pass
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </button>
              ) : user ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className={`flex items-center gap-2 border border-white/20 rounded-full pl-1 pr-3 md:pr-2 lg:pr-3 py-1 hover:bg-white/5 transition-colors ${
                      isProfileOpen ? "bg-white/10" : ""
                    }`}
                  >
                    <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-[10px] xl:text-xs uppercase border border-white/20">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <span className="text-[10px] xl:text-sm font-medium text-gray-300 max-w-[60px] xl:max-w-[80px] truncate">
                      {user.name.split(" ")[0]}
                    </span>
                  </button>

                  {/* Profile Dropdown - Controlled by state now */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-xl bg-[#0e1324] border border-white/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-white/10 bg-white/5">
                        <p className="text-sm text-white font-bold truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>

                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors border-t border-white/10"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => router.push("/auth")}
                  className="bg-[#00c988] hover:bg-[#00a872] text-white text-[10px] xl:text-sm font-bold py-1.5 px-3 xl:py-2 xl:px-6 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                >
                  Login
                  <svg
                    className="w-4 h-4 hidden xl:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button - Kept same but refreshed style */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-black border-b border-white/10`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((item) => {
            const hasSubmenu = !!item.dropdown;
            const isExpanded = expandedMobileMenu === item.name;
            const isActive = pathname === item.path;

            return (
              <div key={item.name}>
                {hasSubmenu ? (
                  <div className="flex items-center justify-between w-full pr-3">
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-bold flex-1 ${
                        isActive
                          ? "text-[#3b5dff] bg-[#3b5dff]/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setExpandedMobileMenu(isExpanded ? null : item.name);
                      }}
                      className="p-3 text-gray-400 hover:text-white focus:outline-none"
                    >
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-bold ${
                      isActive
                        ? "text-[#3b5dff] bg-[#3b5dff]/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Mobile Submenu */}
                {hasSubmenu && (
                  <div
                    className={`pl-10 space-y-1 mb-2 border-l border-white/10 ml-5 overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "max-h-96 mt-1 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                          pathname === subItem.path
                            ? "text-[#3b5dff]"
                            : "text-gray-400 hover:text-white"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {/* {subItem.icon} */}
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Buttons */}
          <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-3">
            {!isConferencePage && (
              <button
                onClick={() => {
                  router.push("/conference");
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-3 rounded-lg w-full text-center"
              >
                Registration
              </button>
            )}

            {isConferencePage &&
            (pathname.includes("/conference/register") ||
              pathname.startsWith("/payment")) ? (
              <button
                onClick={() => {
                  router.push("/conference");
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg w-full text-center"
              >
                Home
              </button>
            ) : isConferencePage ? (
              <button
                onClick={() => {
                  router.push("/conference/register");
                  setIsMenuOpen(false);
                }}
                className="bg-[#00c988] text-white font-bold py-3 rounded-lg w-full text-center"
              >
                Get Pass
              </button>
            ) : user ? (
              <div className="flex items-center gap-3 px-3 py-3 bg-white/5 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                   {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-red-400 text-sm font-bold"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  router.push("/auth");
                  setIsMenuOpen(false);
                }}
                className="bg-[#00c988] text-white font-bold py-3 rounded-lg w-full text-center"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
