"use client";

import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "@/lib/validations/application";
import { HeartHandshake, Stethoscope, Sparkles, ShieldAlert, CheckCircle2 } from "lucide-react";

interface StepTwoProps {
  form: UseFormReturn<ApplicationFormData>;
}

const CATEGORIES = [
  {
    id: "General Advocate",
    title: "General Member / Advocate",
    badge: "Most Popular",
    desc: "Champion women's healthcare, attend quarterly assemblies, and support community advocacy.",
    icon: HeartHandshake,
  },
  {
    id: "Healthcare Volunteer",
    title: "Healthcare Volunteer",
    badge: "Medical / Clinical",
    desc: "Doctors, nurses, lab scientists, or health students providing clinical and field screening aid.",
    icon: Stethoscope,
  },
  {
    id: "Youth Ambassador",
    title: "Youth & Campus Ambassador",
    badge: "Youth & Students",
    desc: "Lead SPPIN menstrual hygiene drives in schools, organize campus dialogues, and mobilize peers.",
    icon: Sparkles,
  },
  {
    id: "Beneficiary / Medical Assistance",
    title: "Beneficiary Applicant",
    badge: "Direct Support",
    desc: "Apply for subsidized fibroid surgery, cancer diagnostic support, or emergency medical aid.",
    icon: ShieldAlert,
  },
];

const SKILLS_OPTIONS = [
  "Community Outreach & Field Missions",
  "Medical & Nursing Skills",
  "Menstrual Hygiene (SPPIN) Education",
  "Social Media & Content Creation",
  "Event Coordination & Logistics",
  "Counseling & Psychosocial Support",
  "Fundraising & Grant Writing",
  "Photography & Video Documentation",
];

export default function StepTwoMembership({ form }: StepTwoProps) {
  const { register, watch, setValue, formState: { errors } } = form;
  const currentCategory = watch("membershipType") || "General Advocate";

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Category Selection Header */}
      <div>
        <h3 className="text-base font-bold text-teal-950">Select Your Membership Category</h3>
        <p className="text-sm text-slate-500 mt-1">
          Choose the role that best matches how you wish to engage with the Female Health Foundation.
        </p>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = currentCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => setValue("membershipType", cat.id)}
              className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? "border-teal-600 bg-teal-50/60 shadow-md shadow-teal-700/10 scale-[1.01]"
                  : "border-slate-200 bg-white/70 hover:border-teal-300 hover:bg-slate-50/80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${isSelected ? "bg-teal-700 text-teal-50" : "bg-slate-100 text-slate-600"}`}>
                    {cat.badge}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{cat.title}</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{cat.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-teal-700">
                  {isSelected ? "Selected Tier" : "Click to Select"}
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-teal-600" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hidden input to keep form registered */}
      <input type="hidden" {...register("membershipType")} value={currentCategory} />

      {/* Areas of Contribution */}
      <div className="space-y-3 pt-2">
        <label className="text-xs font-bold uppercase tracking-wider text-teal-950">
          Areas of Interest & Contribution (Select all that apply)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {SKILLS_OPTIONS.map((skill) => (
            <label
              key={skill}
              className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white/70 hover:bg-teal-50/50 cursor-pointer transition-colors text-xs font-medium text-slate-700"
            >
              <input
                type="checkbox"
                value={skill}
                {...register("skills")}
                className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
              />
              <span>{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Motivation Statement */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-bold uppercase tracking-wider text-teal-950">
          Why are you passionate about joining FHF?
        </label>
        <textarea
          {...register("reasonToJoin")}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm resize-none"
          placeholder="Briefly tell us what inspires you to support female healthcare, ending period poverty, or cancer awareness..."
        />
        {errors.reasonToJoin && (
          <p className="text-rose-500 text-xs font-semibold mt-1">{errors.reasonToJoin.message}</p>
        )}
      </div>

      {/* Volunteer Exp Toggle */}
      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between">
        <div>
          <h5 className="text-sm font-bold text-slate-800">Prior NGO / Volunteer Experience?</h5>
          <p className="text-xs text-slate-500">Have you previously volunteered with health or humanitarian initiatives?</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" {...register("volunteerExp")} className="sr-only peer" />
          <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
        </label>
      </div>
    </div>
  );
}