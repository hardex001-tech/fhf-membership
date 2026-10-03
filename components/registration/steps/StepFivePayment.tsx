"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "@/lib/validations/application";
import { MailCheck, Award, HeartHandshake, CheckCircle2 } from "lucide-react";

interface StepFiveProps {
  form: UseFormReturn<ApplicationFormData>;
}

export default function StepFivePayment({ form }: StepFiveProps) {
  const { watch } = form;
  const fullName = watch("fullName") || "Member Applicant";
  const email = watch("email") || "member@example.com";
  const state = watch("state") || "National Chapter";
  const category = watch("membershipType") || "General Advocate";
  const [pledgeChecked, setPledgeChecked] = useState(true);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Induction Review Card */}
      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Decorative background aura */}
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -top-10 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-700/60 pb-5 mb-5">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-emerald-300 uppercase">
                Official FHF Induction Summary
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{fullName}</h3>
            </div>
            <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
              Ready for Submission
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
              <span className="text-teal-200 block text-[11px]">Membership Role</span>
              <span className="font-bold text-white text-sm mt-0.5 block">{category}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
              <span className="text-teal-200 block text-[11px]">Assigned Chapter</span>
              <span className="font-bold text-white text-sm mt-0.5 block">{state} State</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
              <span className="text-teal-200 block text-[11px]">Confirmation Email To</span>
              <span className="font-bold text-white text-sm mt-0.5 block truncate">{email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Email Delivery Guarantee Banner */}
      <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
        <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-600/20">
          <MailCheck className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
            Instant Confirmation Email Guaranteed
            <span className="text-[10px] bg-emerald-200 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full uppercase">Live Service</span>
          </h4>
          <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">
            Upon submitting your registration, an automated official induction email will be dispatched to <strong>{email}</strong> containing your unique <strong>Registration Reference Code</strong> and printable Membership Slip.
          </p>
        </div>
      </div>

      {/* NGO Induction Pledge */}
      <div className="p-5 rounded-2xl border border-teal-200/70 bg-white shadow-sm space-y-4">
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-teal-950">Foundation Member Commitment</h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              &quot;I commit to upholding the values of the Female Health Foundation: <em>United We Stand</em>, advocating for women&apos;s healthcare, eradicating period poverty, and fostering community solidarity.&quot;
            </p>
          </div>
        </div>

        <label className="flex items-center gap-3 pt-2 cursor-pointer border-t border-slate-100">
          <input
            type="checkbox"
            checked={pledgeChecked}
            onChange={(e) => setPledgeChecked(e.target.checked)}
            className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
          />
          <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            I agree to the Foundation's Code of Conduct and Induction Terms
          </span>
        </label>
      </div>

      {/* 100% Free Humanitarian NGO Guarantee */}
      <div className="p-4 sm:p-5 rounded-2xl border border-emerald-200 bg-emerald-50/70 text-xs text-emerald-900 flex items-center gap-3.5 shadow-xs">
        <HeartHandshake className="w-6 h-6 text-emerald-700 flex-shrink-0" />
        <div>
          <span className="font-extrabold text-emerald-950 text-sm block">100% Free Humanitarian Registration</span>
          <p className="text-xs text-emerald-800/80 mt-0.5 leading-relaxed">
            The Female Health Foundation is a dedicated non-profit NGO. Membership intake, volunteer onboarding, and official induction credentials are free for all applicants.
          </p>
        </div>
      </div>
    </div>
  );
}