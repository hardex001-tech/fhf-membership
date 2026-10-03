"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Camera, ArrowRight, ShieldCheck } from "lucide-react";

export default function GalleryPage() {
  const galleryImages = [
    { src: "/hero-1.jpg", title: "SPPIN Sanitary Drive Assembly", location: "Kwara Secondary School" },
    { src: "/hero-2.jpg", title: "Free Community Breast Health Clinic", location: "Rural Outreach Center" },
    { src: "/hero-3.jpg", title: "Youth Ambassadors Orientation", location: "State Chapter Secretariat" },
    { src: "/hero-4.jpg", title: "Maternal Health Guidance Assembly", location: "Ilorin Community Center" },
    { src: "/hero-5.jpg", title: "Clinical Volunteer Screening Team", location: "Health Screening Mission" },
    { src: "/hero-7.jpg", title: "Pad Distribution to Schoolgirls", location: "Adolescent Hygiene Outreach" },
    { src: "/hero-8.jpg", title: "United We Stand Community Walk", location: "Kwara Health Advocacy Rally" },
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
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            Frontline Humanitarian Moments
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Our Impact in Action
          </h1>
          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Witness the transformations, school assemblies, free medical screenings, and community outreaches led by Female Health Foundation volunteers.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 block mb-1">
                    {img.location}
                  </span>
                  <h3 className="font-bold text-base leading-tight text-white drop-shadow-sm">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full text-center">
        <div className="bg-gradient-to-r from-teal-800 to-emerald-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Be in the Next Chapter of Our Story</h2>
          <p className="text-teal-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Join our volunteer corps to participate in upcoming field outreaches, school sanitary drives, and health rallies.
          </p>
          <Link
            href="/#registration-portal"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-900 font-bold text-xs uppercase tracking-wider hover:bg-teal-50 transition-all shadow-md hover:scale-105"
          >
            Register as a Volunteer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}