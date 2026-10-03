"use client";

import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "@/lib/validations/application";
import { ShieldCheck, UserCheck, PhoneCall, Heart } from "lucide-react";

interface StepThreeProps {
  form: UseFormReturn<ApplicationFormData>;
}

export default function StepThreeEmergency({ form }: StepThreeProps) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Information Header */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50/40 to-white p-5 rounded-2xl border border-emerald-100 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-600/20">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-teal-950">Next of Kin & Emergency Contact</h3>
          <p className="text-sm text-teal-800/80 mt-0.5 leading-relaxed">
            As a registered NGO member participating in healthcare missions, rallies, and state chapter activities, your designated emergency contact ensures safety and official records compliance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name of Emergency Contact */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-teal-600" />
            Full Name of Contact Person <span className="text-rose-500">*</span>
          </label>
          <input
            {...register("emergeName")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="e.g. Alhaji Ibrahim Mohammed"
          />
          {errors.emergeName && (
            <p className="text-rose-500 text-xs font-semibold mt-1">{errors.emergeName.message}</p>
          )}
        </div>

        {/* Relationship */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-teal-600" />
            Relationship to Applicant <span className="text-rose-500">*</span>
          </label>
          <select
            {...register("emergeRelation")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 font-medium text-sm shadow-sm"
          >
            <option value="">Select Relationship</option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Spouse">Spouse / Partner</option>
            <option value="Sister">Sister</option>
            <option value="Brother">Brother</option>
            <option value="Guardian">Legal Guardian</option>
            <option value="Colleague / Friend">Colleague / Friend</option>
          </select>
          {errors.emergeRelation && (
            <p className="text-rose-500 text-xs font-semibold mt-1">{errors.emergeRelation.message}</p>
          )}
        </div>

        {/* Emergency Phone */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
            Contact Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            {...register("emergePhone")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="+234 800 123 4567"
          />
          {errors.emergePhone && (
            <p className="text-rose-500 text-xs font-semibold mt-1">{errors.emergePhone.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}