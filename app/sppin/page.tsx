"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Heart, 
  Sparkles, 
  GraduationCap, 
  Smile, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Package, 
  School 
} from "lucide-react";

export default function SppinPage() {
  const impactGoals = [
    {
      stat: "15,200+",
      label: "Eco-Sanitary Packs Delivered",
      desc: "Distributed directly to secondary school students in rural and low-income communities.",
    },
    {
      stat: "42",
      label: "Partner Secondary Schools",
      desc: "Active educational alliances across Kwara, Osun, Oyo, Kogi, and Niger states.",
    },
    {
      stat: "94%",
      label: "Reduction in Period Truancy",
      desc: "Tracked academic attendance retention among girls receiving quarterly FHF sanitary kits.",
    },
    {
      stat: "100%",
      label: "Free & Dignified",
      desc: "No girl is ever asked to pay. Supported by community volunteers and donor partners.",
    },
  ];

  const sppinPillars = [
    {
      icon: Package,
      title: "Direct Pad Provisions",
      desc: "Supplying reusable and eco-friendly disposable sanitary pads to secondary schools and orphanages to eliminate cost as a barrier to attendance.",
    },
    {
      icon: School,
      title: "Menstrual Hygiene Education",
      desc: "Conducting age-appropriate, stigma-free workshops on reproductive cycles, hygiene management, and bodily confidence.",
    },
    {
      icon: GraduationCap,
      title: "Keeping Girls in School",
      desc: "Ending the monthly cycle of missing 4–5 school days, empowering girls to sit for WAEC, NECO, and JAMB examinations without disruption.",
    },
    {
      icon: Users,
      title: "Youth Ambassador Network",
      desc: "Training student peer mentors to break cultural silence, destigmatize menstruation, and support their peers with emergency pad kits.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-[#033f38] text-white overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-rose-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            Flagship Humanitarian Initiative
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            The SPPIN Campaign
          </h1>
          <p className="text-lg sm:text-2xl text-teal-200 font-bold uppercase tracking-wide mb-4">
            Sanitary Pads Provided In Need
          </p>
          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Menstruation is biological — sanitary pads should not be a luxury. We are on a nationwide mission to eradicate period poverty and ensure no girl drops out of school due to her period.
          </p>
        </div>
      </section>

      {/* Real Impact Stats Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full -mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {impactGoals.map((item, i) => (
            <div key={i} className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-teal-100 shadow-xl shadow-teal-900/5 text-center">
              <span className="text-2xl sm:text-3xl font-black text-teal-900 block mb-1">
                {item.stat}
              </span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                {item.label}
              </span>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Core Strategy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-rose-700 uppercase tracking-widest bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
            How SPPIN Operates
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
            A Multi-Pronged Menstrual Equity Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sppinPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-all flex gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{p.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* School Impact Story Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-br from-teal-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block">
              Voices From the Field
            </span>
            <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic text-teal-100">
              &ldquo;Before the Female Health Foundation brought the SPPIN kits to our school in Ilorin, several girls in my class stayed home every month for up to a week. Now, with free pads in our school clinic and the hygiene training, every single girl is in class with pride and confidence.&rdquo;
            </blockquote>
            <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
              — Mrs. R. A. Adeyemi, Secondary School Guidance Counselor
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
          Join the SPPIN Volunteer Network
        </h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Sign up as a Youth Ambassador or Healthcare Volunteer to help distribute sanitary kits, lead school assemblies, and be a menstrual equity champion in your state.
        </p>
        <Link
          href="/#registration-portal"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-600/25 transition-all hover:scale-105"
        >
          Register to Volunteer for SPPIN
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}