"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight, 
  Globe, 
  ShieldCheck 
} from "lucide-react";

export default function OfficesPage() {
  const regionalOffices = [
    {
      region: "National Headquarters",
      city: "Ilorin, Kwara State",
      address: "14 Secretariat Road, GRA, Ilorin, Kwara State, Nigeria",
      email: "headquarters@fhf-nigeria.org",
      phone: "+234 800 000 3431",
      lead: "National Secretariat & Executive Directorate",
      badge: "HQ Secretariat",
    },
    {
      region: "South-West Regional Chapter Hub",
      city: "Ibadan, Oyo State",
      address: "Ring Road Medical Outreach Centre, Ibadan",
      email: "southwest@fhf-nigeria.org",
      phone: "+234 802 111 4455",
      lead: "Lagos, Oyo, Ogun, Ondo, Osun, Ekiti Chapter Coordination",
      badge: "Regional Hub",
    },
    {
      region: "North-Central Regional Chapter Hub",
      city: "Abuja, FCT",
      address: "Central Area Humanitarian Complex, Garki, Abuja",
      email: "abuja@fhf-nigeria.org",
      phone: "+234 803 222 5566",
      lead: "FCT, Niger, Kogi, Benue, Nasarawa, Plateau Chapter Coordination",
      badge: "Regional Hub",
    },
    {
      region: "Northern & North-West Regional Hub",
      city: "Kaduna, Kaduna State",
      address: "Independence Way Community Health Wing, Kaduna",
      email: "north@fhf-nigeria.org",
      phone: "+234 804 333 6677",
      lead: "Kaduna, Kano, Katsina, Sokoto, Kebbi, Zamfara Coordination",
      badge: "Regional Hub",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-[#033f38] text-white overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            National &amp; Regional Secretariat
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            State Chapters &amp; National Offices
          </h1>
          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Ilorin, Kwara State, the Female Health Foundation coordinates volunteer networks and health outreaches across all 36 states and the Federal Capital Territory.
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regionalOffices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                    {office.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{office.city}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{office.region}</h3>
                <p className="text-xs text-teal-800 font-semibold mb-5">{office.lead}</p>

                <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-teal-700 hover:underline">
                      {office.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{office.phone}</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Mon – Fri (8:00 AM – 5:00 PM)
                </span>
                <span className="text-emerald-700 font-bold">Active Chapter Hub</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Register In Your State CTA */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
          Join Your State Chapter Today
        </h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          When you register online, our automated system maps you directly to your local state coordinator and induction group.
        </p>
        <Link
          href="/#registration-portal"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-600/25 transition-all hover:scale-105"
        >
          Complete Free State Member Registration
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}