"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Heart, 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Users, 
  CheckCircle2 
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Radical Empathy",
      desc: "Putting the dignity, bodily autonomy, and psychological well-being of women and girls first in all health interventions.",
    },
    {
      title: "Grassroots Equity",
      desc: "Ensuring rural and economically challenged communities receive identical high-standard medical screenings and menstrual supplies as urban centers.",
    },
    {
      title: "Transparency & Stewardship",
      desc: "Operating with absolute integrity as a non-profit NGO, accounting for every sanitary kit and surgical intervention grant.",
    },
    {
      title: "United We Stand",
      desc: "Our founding motto — building a national alliance where every voice contributes to eradicating preventable female health suffering.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-[#033f38] text-white overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-200 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            About Female Health Foundation
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Dedicated to Women&apos;s Health, Dignity &amp; Equity.
          </h1>
          <p className="text-base sm:text-xl text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Ilorin, Kwara State, FHF is a national humanitarian NGO advocating for menstrual equity, early cancer detection, and life-saving reproductive healthcare.
          </p>
        </div>
      </section>

      {/* Mission & Vision Floating Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mission */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-xl shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-teal-50 text-teal-700 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block">
              Our Core Mandate
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1 mb-3">Our Mission</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To build resilient, empowered communities through grassroots health education, accessible disease prevention screenings, active policy advocacy, and the direct eradication of period poverty for women and girls across Nigeria and Africa.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-xl shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 shadow-xs">
              <Eye className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
              The Future We Are Building
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1 mb-3">Our Vision</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We envision a continent where no girl misses school because of menstruation, every woman has early diagnostic access to cancer screenings, and financial constraints never determine whether a mother survives a critical fibroid or reproductive condition.
            </p>
          </div>

        </div>
      </section>

      {/* Story & Foundation Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/80 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-4 h-4 text-rose-500" />
            Our Foundation Story
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Born from a Commitment to Leave No Woman Behind
          </h2>
          <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
            <p>
              The Female Health Foundation was established out of urgent frontline realities observed in secondary schools, rural clinics, and public teaching hospitals across Kwara State and Nigeria. Millions of adolescent girls routinely missed 4–5 days of school each month simply because they could not afford menstrual hygiene supplies — a devastating cycle known as <em>period poverty</em>.
            </p>
            <p>
              Simultaneously, late-stage detection of breast and cervical cancer and severe complications from uterine fibroids were claiming the lives of mothers who lacked access to timely screening or surgery subsidies.
            </p>
            <p>
              In response, a united collective of healthcare practitioners, teachers, and human rights advocates convened under the motto <strong>&ldquo;United We Stand&rdquo;</strong> to establish FHF: a free, transparent, and volunteer-powered NGO dedicated to providing dignity, healthcare intervention, and national advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
            Our Guiding Compass
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
            Core Values We Live By
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <h3 className="font-bold text-slate-900 text-base">{v.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full text-center">
        <div className="bg-gradient-to-r from-teal-800 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Be Part of the Solution</h2>
          <p className="text-teal-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Join thousands of advocates and health volunteers across 36 states. Induction is 100% free with instant digital credentials.
          </p>
          <Link
            href="/#registration-portal"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-900 font-bold text-xs uppercase tracking-wider hover:bg-teal-50 transition-all shadow-lg hover:scale-105"
          >
            Register as a Member
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}