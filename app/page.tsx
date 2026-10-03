"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MultiStepRegistration from "@/components/registration/MultiStepRegistration";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Award, 
  FileCheck2, 
  ChevronRight, 
  Stethoscope, 
  Activity, 
  HelpCircle, 
  CheckCircle, 
  Search
} from "lucide-react";

export default function Home() {
  const backgroundMedia = [
    { type: "video", src: "/hero-video.mp4" },
    { type: "image", src: "/hero-1.jpg" },
    { type: "image", src: "/hero-2.jpg" },
    { type: "image", src: "/hero-3.jpg" },
    { type: "image", src: "/hero-4.jpg" },
    { type: "image", src: "/hero-5.jpg" },
    { type: "image", src: "/hero-7.jpg" },
    { type: "image", src: "/hero-8.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundMedia.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [backgroundMedia.length]);

  const scrollToRegistration = () => {
    const el = document.getElementById("registration-portal");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "Will I receive a confirmation email immediately after registering?",
      a: "Yes! The moment you submit your registration, an automated confirmation email with your official Membership Reference ID and Induction Summary will be sent to the email address you provided.",
    },
    {
      q: "Is registration open to volunteers and supporters across all states?",
      a: "Absolutely. FHF operates active chapters across all 36 states of Nigeria and Abuja FCT. Whether you are a healthcare practitioner, student, teacher, or community advocate, you can register and connect with your local state chapter.",
    },
    {
      q: "What is the SPPIN Campaign?",
      a: "SPPIN stands for 'Sanitary Pads Provided In Need'. It is our flagship menstrual equity campaign that distributes free eco-friendly sanitary kits to secondary school girls and underprivileged women to end period poverty.",
    },
    {
      q: "How can I verify or reprint my membership slip later?",
      a: "You can click the 'Check Status' button in the navigation bar anytime, enter your Reference ID or registered email, and view or print your active membership slip.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fcfdfd] text-slate-800 selection:bg-teal-600 selection:text-white">
      
      {/* 1. UNIFIED EXECUTIVE NGO NAVBAR */}
      <Navbar />

      {/* 3. HERO SECTION (FLOATING AESTHETIC & NGO STORYTELLING) */}
      <section className="relative w-full min-h-[82vh] flex flex-col items-center justify-center pt-16 pb-28 px-4 overflow-hidden bg-[#022c26]">
        
        {/* Dynamic Background Carousel with Cinematic Tone */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {backgroundMedia[currentIndex].type === "video" ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={backgroundMedia[currentIndex].src} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${backgroundMedia[currentIndex].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Deep Translucent Film Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#022c26]/90 via-[#033f38]/85 to-[#02241f]/95 z-10" />

        {/* Floating Ambient Glowing Auras */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center flex flex-col items-center max-w-4xl mx-auto px-4">
          
          {/* Floating Certified NGO Chip */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-200 text-xs font-bold uppercase tracking-wider mb-8 shadow-lg"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Registered NGO • Official National Membership Intake 2026
          </motion.div>

          {/* Floating Emblem (Gentle levitation without dizzying spinning) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-6"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/95 backdrop-blur-md p-3.5 shadow-2xl ring-4 ring-white/20 border border-teal-200/50 flex items-center justify-center animate-float-gentle">
              <div className="relative w-full h-full">
                <Image
                  src="/fhf-logo.png"
                  alt="Female Health Foundation Emblem"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 96px, 112px"
                />
              </div>
            </div>
          </motion.div>

          {/* Majestic NGO Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5 drop-shadow-md max-w-3xl"
          >
            Empowering Women, Restoring Dignity, Transforming Communities.
          </motion.h1>

          {/* Empathetic Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-teal-100/90 font-medium max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Join a nationwide alliance of advocates, medical volunteers, and humanitarian leaders across 36 states. Register now to receive your <strong>official membership credentials</strong> and instant confirmation letter.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={scrollToRegistration}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-teal-500/25 transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Begin Member Registration
            </button>

            <button
              type="button"
              onClick={() => setIsVerifyOpen(true)}
              className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer hover:scale-105 flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Check Status
            </button>
          </motion.div>

          {/* Floating Metric Capsules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 w-full max-w-3xl"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 text-center text-white">
              <span className="text-xl sm:text-2xl font-black block text-emerald-300">15,000+</span>
              <span className="text-[11px] text-teal-100 font-medium uppercase tracking-wider">Sanitary Kits Given</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 text-center text-white">
              <span className="text-xl sm:text-2xl font-black block text-emerald-300">450+</span>
              <span className="text-[11px] text-teal-100 font-medium uppercase tracking-wider">Surgeries & Screenings</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 text-center text-white">
              <span className="text-xl sm:text-2xl font-black block text-emerald-300">36 States</span>
              <span className="text-[11px] text-teal-100 font-medium uppercase tracking-wider">Chapters Nationwide</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 text-center text-white">
              <span className="text-xl sm:text-2xl font-black block text-emerald-300">Instant</span>
              <span className="text-[11px] text-teal-100 font-medium uppercase tracking-wider">Email Confirmation</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. THE CENTRAL REGISTRATION PORTAL (MAIN PURPOSE OF SITE) */}
      <section className="relative z-30 -mt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex-grow">
        <MultiStepRegistration />
      </section>

      {/* 5. WHY REGISTER / MEMBER PRIVILEGES (WHY JOIN THE NGO) */}
      <section id="privileges" className="py-20 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
              Community Membership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Why Register with Female Health Foundation?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every member receives institutional credentials, advocacy training, and the power to transform lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Verified NGO Credential</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Receive an official digital membership pass and certificate recognized across our nationwide non-profit network.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Free Medical Screenings</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Members and beneficiaries get prioritized access to cervical screenings, breast checks, and reproductive health grants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Field Outreach & Missions</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Lead and participate in high-impact school sanitary distributions, rural outreaches, and maternal advocacy drives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Advocacy Certification</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Earn recognized certificates in community public health, women&apos;s rights advocacy, and humanitarian leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR 4 PILLARS OF IMPACT */}
      <section id="pillars" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
              Core Interventions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Our Four Pillars of Community Impact
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every registration directly fuels our four life-changing humanitarian programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50/70 to-teal-50/40 border border-emerald-100/80 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-600/20">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Pillar I</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">The SPPIN Campaign (Period Equity)</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Sanitary Pads Provided In Need — eradicating period poverty in secondary schools and vulnerable settlements through free eco-pads, menstrual health hygiene education, and destigmatization dialogues.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-teal-50/70 to-cyan-50/40 border border-teal-100/80 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-600/20">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">Pillar II</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Breast &amp; Cervical Cancer Screening</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Early detection saves lives. We organize community clinical examination camps, subsidize pap smears and mammography diagnostics, and pair survivors with emotional support mentors.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-rose-50/70 to-amber-50/40 border border-rose-100/80 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-rose-600/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">Pillar III</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Maternal Care &amp; Fibroid Surgery Grants</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Thousands of low-income women suffer from debilitating fibroids in silence. We provide medical intervention sponsorships and surgery grants in partnership with accredited teaching hospitals.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/70 to-emerald-50/40 border border-amber-100/80 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-600/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Pillar IV</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Adolescent Health &amp; Mentorship</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Nurturing the next generation of confident female changemakers through school health clubs, psycho-social counseling, and leadership development across 36 states.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Registration &amp; Induction FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50/50"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. EXECUTIVE NGO FOOTER */}
      <Footer />
    </div>
  );
}