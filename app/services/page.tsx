"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Stethoscope, 
  HeartHandshake, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

export default function ServicesPage() {
  const serviceCategories = [
    {
      num: "01",
      title: "Community Clinical Screenings",
      badge: "Preventive Care",
      desc: "Free grassroots health checks including blood pressure monitoring, blood glucose testing, BMI assessments, and clinical referrals.",
      deliverables: ["Free rural medical camps", "Mobile diagnostic clinics", "Specialist triage and hospital referrals"],
    },
    {
      num: "02",
      title: "Cervical & Breast Cancer Early Detection",
      badge: "Women's Oncology",
      desc: "Promoting early detection to save lives through subsidized clinical breast exams, pap smear screenings, and self-exam training.",
      deliverables: ["Clinical breast examinations", "Subsidized cervical screening drives", "Patient navigation & emotional support"],
    },
    {
      num: "03",
      title: "Maternal Health & Fibroid Surgery Grants",
      badge: "Surgical Grants",
      desc: "Providing surgical funding aid and clinical care navigation for underprivileged women suffering from debilitating uterine fibroids.",
      deliverables: ["Surgery intervention subsidies", "Pre- and post-op nursing care follow-up", "Maternal welfare support packages"],
    },
    {
      num: "04",
      title: "Menstrual Hygiene (The SPPIN Campaign)",
      badge: "Flagship Drive",
      desc: "Eradicating period poverty through the free distribution of sanitary pads to secondary schools and marginalized young women.",
      deliverables: ["Sanitary pad distribution missions", "School hygiene education workshops", "Campus ambassadors peer networks"],
    },
    {
      num: "05",
      title: "Volunteer Health Professional Training",
      badge: "Capacity Building",
      desc: "Equipping medical students, registered nurses, and community volunteers with certified training in humanitarian health advocacy.",
      deliverables: ["Emergency first-aid certifications", "Public health field training", "Youth mentorship & leadership forums"],
    },
    {
      num: "06",
      title: "Adolescent Guidance & Psychosocial Care",
      badge: "Mental Wellness",
      desc: "Destigmatizing reproductive challenges, offering compassionate counseling, and supporting girls navigating health stigmas.",
      deliverables: ["Confidential one-on-one counseling", "School health club sponsorships", "Gender-based violence awareness"],
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
            <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
            Humanitarian Healthcare Interventions
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Our Programs &amp; Community Services
          </h1>
          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            From free rural clinical outreaches to subsidized fibroid surgical interventions, explore how the Female Health Foundation delivers critical healthcare dignity across Nigeria.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((s, i) => (
            <div
              key={i}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-teal-900/40">{s.num}</span>
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{s.desc}</p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {s.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficiary & Volunteer Callout */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full text-center">
        <div className="bg-gradient-to-r from-teal-800 to-emerald-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Need Healthcare Support or Want to Volunteer?</h2>
          <p className="text-teal-100 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Whether applying for medical assistance or joining our medical corps as a clinical volunteer, registration is 100% free and open nationwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#registration-portal"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-900 font-bold text-xs uppercase tracking-wider hover:bg-teal-50 transition-all shadow-md hover:scale-105"
            >
              Register Free as a Volunteer / Beneficiary
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}