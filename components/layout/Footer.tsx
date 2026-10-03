"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Mail, MapPin, Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#032e27] text-teal-100 pt-16 pb-10 border-t-4 border-emerald-500 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white w-max p-2 rounded-xl">
              <div className="relative h-10 w-10">
                <Image src="/fhf-logo.png" alt="FHF Emblem" fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-[#032e27] font-black text-base pr-2">FHF NGO</span>
            </div>
            <p className="text-xs text-teal-200/80 leading-relaxed">
              The Female Health Foundation is a registered humanitarian organization dedicated to ending period poverty, facilitating cancer screenings, and sponsoring critical fibroid surgeries.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-300">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Motto: United We Stand
            </div>
          </div>

          {/* Quick Registration Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Registration</h4>
            <ul className="space-y-2.5 text-xs text-teal-200/90 font-medium">
              <li>
                <Link href="/#registration-portal" className="hover:text-white transition-colors">
                  New Member Registration (Free)
                </Link>
              </li>
              <li>
                <Link href="/#registration-portal" className="hover:text-white transition-colors">
                  Healthcare Volunteer Induction
                </Link>
              </li>
              <li>
                <Link href="/#registration-portal" className="hover:text-white transition-colors">
                  Beneficiary Support Application
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Verification & Induction FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & Campaigns */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Humanitarian Work</h4>
            <ul className="space-y-2.5 text-xs text-teal-200/90 font-medium">
              <li><Link href="/sppin" className="hover:text-white transition-colors">The SPPIN Pad Campaign</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cancer Early Detection</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Fibroid Surgical Grants</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Foundation</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resource Downloads</Link></li>
            </ul>
          </div>

          {/* Contact Secretariat */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Secretariat HQ</h4>
            <ul className="space-y-3 text-xs text-teal-200/90">
              <li className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>National Headquarters: Ilorin, Kwara State, Nigeria.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@fhf-nigeria.org" className="underline hover:text-white">
                  info@fhf-nigeria.org
                </a>
              </li>
              <li className="text-[11px] text-teal-300/80 pt-1">
                Hours: Monday – Friday (8:00 AM – 5:00 PM WAT)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-teal-400">
          <p>© {new Date().getFullYear()} Female Health Foundation (FHF). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-300">
              <ShieldCheck className="w-4 h-4" /> CAC Certified Non-Profit
            </span>
            <span>•</span>
            <span>100% Free Member Induction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
