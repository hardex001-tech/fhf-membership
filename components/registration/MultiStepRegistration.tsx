"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, ApplicationFormData } from "@/lib/validations/application";
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Printer, 
  Copy, 
  Mail, 
  Eye, 
  UserPlus, 
  ShieldCheck,
  Send
} from "lucide-react";

// Step Components
import StepOnePersonal from "./steps/StepOnePersonal";
import StepTwoMembership from "./steps/StepTwoMembership";
import StepThreeEmergency from "./steps/StepThreeEmergency";
import StepFourDocuments from "./steps/StepFourDocuments";
import StepFivePayment from "./steps/StepFivePayment";

interface RegistrationSuccessData {
  registrationId: string;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  lga: string;
  membershipType: string;
  issuedAt: string;
  emailHtmlPreview?: string;
  simulatedEmail?: boolean;
}

export default function MultiStepRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<RegistrationSuccessData | null>(null);
  const [showEmailPreviewModal, setShowEmailPreviewModal] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      gender: "Female",
      email: "",
      phone: "",
      state: "",
      lga: "",
      address: "",
      membershipType: "General Advocate",
      skills: ["Community Outreach & Field Missions"],
      volunteerExp: false,
      emergeName: "",
      emergeRelation: "",
      emergePhone: "",
      idType: "NATIONAL_ID",
    },
  });

  const nextStep = async () => {
    // Validate only relevant fields per step
    let fieldsToValidate: (keyof ApplicationFormData)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["fullName", "email", "phone", "state", "lga", "address"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["membershipType"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["emergeName", "emergeRelation", "emergePhone"];
    }

    if (fieldsToValidate.length > 0) {
      const isValid = await form.trigger(fieldsToValidate);
      if (!isValid) return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, 5));
    // Scroll smoothly to form container
    const el = document.getElementById("registration-portal");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit registration");
      }

      setSuccessData(result);
    } catch (err: any) {
      console.error("Submission failed:", err);
      setSubmitError(err.message || "An error occurred while submitting your registration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyReferenceId = () => {
    if (successData?.registrationId) {
      navigator.clipboard.writeText(successData.registrationId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2500);
    }
  };

  const handleReset = () => {
    form.reset();
    setSuccessData(null);
    setCurrentStep(1);
    setSubmitError(null);
  };

  const stepLabels = [
    { num: 1, title: "Personal Details", subtitle: "Name & Contact" },
    { num: 2, title: "Membership Tier", subtitle: "Role & Skills" },
    { num: 3, title: "Next of Kin", subtitle: "Emergency Info" },
    { num: 4, title: "Verification", subtitle: "ID & Photo" },
    { num: 5, title: "Induction", subtitle: "Review & Email" },
  ];

  return (
    <div id="registration-portal" className="w-full relative scroll-mt-24">
      {/* Container with soft floating shadow & glass styling */}
      <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-teal-100 shadow-[0_20px_60px_-15px_rgba(4,78,66,0.12)] p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300">
        
        {/* Subtle Watermark Stamp */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 opacity-[0.03] pointer-events-none select-none">
          <Image src="/fhf-logo.png" alt="FHF" fill className="object-contain" />
        </div>

        {/* --- VIEW 1: REGISTRATION FORM --- */}
        {!successData ? (
          <div>
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Official 2026 NGO Intake
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                National Member & Volunteer Induction
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Complete the 5-step registration below to receive your <strong>official membership credentials</strong> and an automated confirmation email.
              </p>
            </div>

            {/* Stepper Progress Bar */}
            <div className="mb-10 px-2 sm:px-6">
              <div className="relative flex justify-between items-center">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 -z-0 rounded-full" />
                <div 
                  className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 -translate-y-1/2 -z-0 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                />

                {stepLabels.map((s) => {
                  const isActive = currentStep === s.num;
                  const isCompleted = currentStep > s.num;

                  return (
                    <div key={s.num} className="flex flex-col items-center relative z-10">
                      <button
                        type="button"
                        onClick={() => {
                          if (isCompleted) setCurrentStep(s.num);
                        }}
                        disabled={!isCompleted && !isActive}
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                          isCompleted
                            ? "bg-teal-600 text-white shadow-md shadow-teal-600/30 ring-4 ring-white cursor-pointer"
                            : isActive
                              ? "bg-white text-teal-700 border-2 border-teal-600 ring-4 ring-teal-50 shadow-md scale-110"
                              : "bg-white text-slate-400 border border-slate-200"
                        }`}
                      >
                        {isCompleted ? <Check className="w-5 h-5 stroke-[2.5]" /> : s.num}
                      </button>
                      <span className={`text-[11px] font-bold mt-2 text-center hidden md:block max-w-[90px] ${
                        isActive ? "text-teal-900 font-extrabold" : isCompleted ? "text-slate-700" : "text-slate-400"
                      }`}>
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Error Notice */}
            {submitError && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                {submitError}
              </div>
            )}

            {/* Form Steps */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="min-h-[380px]"
                >
                  {currentStep === 1 && <StepOnePersonal form={form} />}
                  {currentStep === 2 && <StepTwoMembership form={form} />}
                  {currentStep === 3 && <StepThreeEmergency form={form} />}
                  {currentStep === 4 && <StepFourDocuments form={form} />}
                  {currentStep === 5 && <StepFivePayment form={form} />}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Step
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-700/25 transition-all cursor-pointer hover:-translate-y-0.5"
                  >
                    Proceed to Next Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-800 hover:from-teal-800 hover:to-emerald-900 text-white font-bold text-sm shadow-xl shadow-teal-900/20 transition-all cursor-pointer hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating Credentials & Sending Email...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Complete Registration & Send Confirmation Email
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          /* --- VIEW 2: OFFICIAL INDUCTION CONFIRMATION PASS --- */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Top Success Pill */}
            <div className="text-center max-w-xl mx-auto space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner ring-8 ring-emerald-50">
                <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Registration Confirmed!
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Welcome to the <strong>Female Health Foundation (FHF)</strong>. Your official membership record has been inducted into the national registry.
              </p>
            </div>

            {/* Email Dispatch Notice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-between gap-4 max-w-2xl mx-auto shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-teal-950">
                    Confirmation Letter Dispatched
                  </h4>
                  <p className="text-xs text-teal-800">
                    Delivered to <strong>{successData.email}</strong>
                  </p>
                </div>
              </div>

              {successData.emailHtmlPreview && (
                <button
                  type="button"
                  onClick={() => setShowEmailPreviewModal(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-teal-200 text-teal-700 hover:bg-teal-600 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer flex-shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Email
                </button>
              )}
            </div>

            {/* The Official Digital Induction Slip (Printable / Savable) */}
            <div 
              id="printable-slip" 
              className="max-w-2xl mx-auto rounded-3xl border-2 border-emerald-600/30 bg-gradient-to-b from-white via-slate-50/50 to-white p-6 sm:p-8 shadow-xl relative overflow-hidden"
            >
              {/* Foil Stamp Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-700 to-emerald-700 text-white text-[10px] font-extrabold uppercase tracking-widest px-8 py-1.5 rotate-45 translate-x-8 translate-y-4 shadow-md">
                VERIFIED NGO
              </div>

              {/* FHF Pass Header */}
              <div className="flex items-center gap-4 border-b border-slate-200/80 pb-5 mb-6">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image src="/fhf-logo.png" alt="FHF Emblem" fill className="object-contain" priority />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    FEMALE HEALTH FOUNDATION
                  </h3>
                  <p className="text-xs text-teal-700 font-bold uppercase tracking-wider">
                    Official National Induction Credential
                  </p>
                </div>
              </div>

              {/* Reference ID Showcase */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 block">
                    Membership Reference Number
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-teal-950 tracking-wider">
                    {successData.registrationId}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={copyReferenceId}
                  className="px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-600 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copiedId ? "Copied!" : "Copy Code"}
                </button>
              </div>

              {/* Induction Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs mb-6">
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">Member Name</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block truncate">
                    {successData.fullName}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">Category</span>
                  <span className="font-bold text-teal-800 text-sm mt-0.5 block truncate">
                    {successData.membershipType}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">State Chapter</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block truncate">
                    {successData.state}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">LGA Chapter</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block truncate">
                    {successData.lga}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">Phone</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block truncate">
                    {successData.phone}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <span className="text-slate-400 block text-[11px]">Induction Date</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block truncate">
                    {successData.issuedAt}
                  </span>
                </div>
              </div>

              {/* Seal & Verification Signature */}
              <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Status: Active & Registered
                </div>
                <span className="text-[11px]">Ilorin Headquarters • Kwara State</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-teal-600/20 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                Print / Save Slip
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                Register Another Applicant
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* --- CONFIRMATION EMAIL PREVIEW MODAL --- */}
      {showEmailPreviewModal && successData?.emailHtmlPreview && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                <h4 className="text-sm font-bold text-slate-900">
                  Confirmation Email Preview (Dispatched to {successData.email})
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowEmailPreviewModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-sm px-2 py-1 rounded-lg"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-grow bg-slate-100">
              <iframe
                title="Email Preview"
                srcDoc={successData.emailHtmlPreview}
                className="w-full min-h-[500px] rounded-xl border border-slate-200 bg-white shadow-xs"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}