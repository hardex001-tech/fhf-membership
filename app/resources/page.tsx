"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  FileText, 
  Download, 
  BookOpen, 
  ArrowRight, 
  FolderDown, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export default function ResourcesPage() {
  const resourceGroups = [
    {
      category: "Official Foundation Documents",
      items: [
        {
          title: "FHF Member Code of Conduct & Induction Handbook",
          type: "Official PDF",
          size: "1.4 MB",
          desc: "Comprehensive orientation guidelines, volunteer ethics, and member benefits overview.",
        },
        {
          title: "FHF Non-Profit Constitution & Mandate",
          type: "Governance PDF",
          size: "2.1 MB",
          desc: "Our registered constitution, objectives, Board of Trustees charter, and legal filings.",
        },
      ],
    },
    {
      category: "Clinical & Community Health Manuals",
      items: [
        {
          title: "SPPIN Menstrual Hygiene Educator's Toolkit",
          type: "Training Manual",
          size: "3.2 MB",
          desc: "Curriculum for facilitating secondary school menstrual health workshops and pad distributions.",
        },
        {
          title: "Breast & Cervical Cancer Early Detection Guide",
          type: "Clinical Guide",
          size: "1.8 MB",
          desc: "Step-by-step illustrated self-examination manual, warning signs, and referral directories.",
        },
        {
          title: "Maternal Health & Reproductive Nutrition Guide",
          type: "Patient Manual",
          size: "2.5 MB",
          desc: "Nutritional and clinical care guidance for pregnant mothers and postpartum recovery.",
        },
      ],
    },
    {
      category: "Advocacy & Media Assets",
      items: [
        {
          title: "SPPIN Campaign Media Kit & High-Res Posters",
          type: "Asset Pack",
          size: "8.5 MB",
          desc: "Printable posters, infographic banners, and social advocacy cards for state rallies.",
        },
      ],
    },
  ];

  const handleResourceClick = (title: string) => {
    alert(`Resource "${title}" is ready. An official copy will also be included in your induction email.`);
  };

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
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            Knowledge &amp; Outreach Library
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Educational Resources &amp; Downloads
          </h1>
          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Access free educational handbooks, menstrual hygiene guides, advocacy toolkits, and official Female Health Foundation publications.
          </p>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full -mt-10 relative z-20">
        <div className="space-y-12">
          {resourceGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <FolderDown className="w-5 h-5 text-teal-700" />
                {group.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">{item.size}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleResourceClick(item.title)}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 hover:border-teal-600 hover:bg-teal-50 text-slate-700 hover:text-teal-900 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-600" />
                      Download Document
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Member Resource Pack Banner */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full text-center">
        <div className="bg-gradient-to-r from-teal-800 to-emerald-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Want the Complete Member Induction Pack?</h2>
          <p className="text-teal-100 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Registered members receive all toolkits and chapter orientation material automatically attached to their confirmation email.
          </p>
          <Link
            href="/#registration-portal"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-900 font-bold text-xs uppercase tracking-wider hover:bg-teal-50 transition-all shadow-md hover:scale-105"
          >
            Register Free for FHF
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}