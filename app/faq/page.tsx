"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  HelpCircle, 
  ChevronRight, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export default function FaqPage() {
  const faqs = [
    {
      q: "Is registration with Female Health Foundation really 100% free?",
      a: "Yes! FHF is a registered non-governmental organization (NGO). Membership induction, volunteer onboarding, and official digital membership credentials are completely free for all applicants nationwide.",
      category: "Membership",
    },
    {
      q: "What happens immediately after I submit my registration online?",
      a: "Our automated induction system immediately issues your unique Membership Reference Code (e.g. FHF-2026-XXXXX), renders your official printable Digital Induction Pass, and dispatches an official confirmation letter directly to your registered email address.",
      category: "Induction",
    },
    {
      q: "Can male allies or health professionals register as volunteers?",
      a: "Yes, absolutely! Men are warmly welcomed as advocates, clinical volunteers (doctors, lab technicians, pharmacists), and logistical volunteers. When applying, simply select the 'Healthcare Volunteer' or 'General Advocate' category.",
      category: "Volunteering",
    },
    {
      q: "What is the SPPIN Campaign and how can I participate?",
      a: "SPPIN stands for 'Sanitary Pads Provided In Need'. It is our flagship menstrual equity campaign that distributes free sanitary packs to secondary school students in rural communities. Registered members can volunteer for school distributions or coordinate drives in their state.",
      category: "Programs",
    },
    {
      q: "How can I verify or print my membership slip in the future?",
      a: "You can click the 'Check Status' button in the navigation bar anytime, type in your Reference ID or registered email, and your verified membership credentials will be displayed for instant printing or verification.",
      category: "Verification",
    },
    {
      q: "How does FHF fund fibroid surgeries and free cancer screenings?",
      a: "Our programs are funded through philanthropic grants, medical partner subsidies with teaching hospitals, humanitarian donations, and community healthcare alliances. All assistance is distributed based on clinical vulnerability assessments.",
      category: "Medical Support",
    },
    {
      q: "Where is FHF officially located and how can I contact the Secretariat?",
      a: "Our National Headquarters is located at 14 Secretariat Road, GRA, Ilorin, Kwara State, Nigeria. You can contact our team anytime via email at info@fhf-nigeria.org or through our regional chapter coordination desks.",
      category: "General",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Membership", "Induction", "Volunteering", "Programs", "Verification"];

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

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
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            Support &amp; Information
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Female Health Foundation membership, volunteer induction, confirmation emails, and community outreaches.
          </p>
        </div>
      </section>

      {/* Category Pills & FAQ Accordion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full -mt-10 relative z-20">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-teal-700 text-white shadow-md shadow-teal-700/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-teal-400 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-teal-300 transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50/50"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      Q
                    </span>
                    {faq.q}
                  </span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-90 text-teal-600" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    <p className="pl-11">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Banner */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full text-center">
        <div className="bg-gradient-to-r from-teal-800 to-emerald-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Ready to Join the Movement?</h2>
          <p className="text-teal-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Membership registration takes under 3 minutes. Receive your automated confirmation email and induction pass immediately.
          </p>
          <Link
            href="/#registration-portal"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-900 font-bold text-xs uppercase tracking-wider hover:bg-teal-50 transition-all shadow-md hover:scale-105"
          >
            Start Free Online Registration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}