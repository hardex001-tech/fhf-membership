"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ShieldCheck } from "lucide-react";
import VerifyModal from "@/components/registration/VerifyModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About FHF", href: "/about" },
    { label: "The SPPIN Drive", href: "/sppin" },
    { label: "Programs & Services", href: "/services" },
    { label: "State Offices", href: "/offices" },
    { label: "Resources", href: "/resources" },
    { label: "FAQs", href: "/faq" },
  ];

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT STRIP */}
      <div className="bg-gradient-to-r from-[#033f38] via-[#044e43] to-[#022c27] text-teal-100 text-xs py-2 px-4 sm:px-8 border-b border-teal-800/40 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              Official 2026 NGO Intake
            </span>
            <span className="hidden md:inline text-teal-300">
              — National Membership & Volunteer Induction Portal (100% Free)
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-semibold">
            <button
              onClick={() => setIsVerifyOpen(true)}
              className="text-emerald-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Search className="w-3 h-3" />
              Check Status
            </button>
            <span className="hidden sm:inline text-teal-400/50">|</span>
            <a href="mailto:info@fhf-nigeria.org" className="hidden sm:inline hover:text-white transition-colors">
              info@fhf-nigeria.org
            </a>
          </div>
        </div>
      </div>

      {/* 2. EXECUTIVE NGO NAVIGATION BAR */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center">
          
          {/* Logo & Foundation Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-white p-1 ring-1 ring-slate-100 shadow-xs group-hover:scale-105 transition-transform">
              <Image 
                src="/fhf-logo.png" 
                alt="Female Health Foundation Logo" 
                fill 
                className="object-contain" 
                priority 
                sizes="48px"
              />
            </div>
            <div>
              <span className="block font-black text-slate-900 text-base sm:text-lg tracking-tight uppercase leading-tight">
                Female Health Foundation
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-teal-700 tracking-widest uppercase block">
                Official NGO Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive 
                      ? "text-teal-700 border-b-2 border-teal-600 font-extrabold" 
                      : "hover:text-teal-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsVerifyOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:border-teal-500 text-slate-700 hover:text-teal-800 text-xs font-bold uppercase tracking-wider transition-all bg-white shadow-xs cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              Check Status
            </button>

            <Link
              href="/#registration-portal"
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-teal-600/25 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              Register Free
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 animate-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-bold ${
                  pathname === link.href ? "text-teal-700" : "text-slate-700 hover:text-teal-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsVerifyOpen(true);
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                Check Registration Status
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Verification Modal */}
      <VerifyModal isOpen={isVerifyOpen} onClose={() => setIsVerifyOpen(false)} />
    </>
  );
}
