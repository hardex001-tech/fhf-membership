"use client";

import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "@/lib/validations/application";
import { User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Building2 } from "lucide-react";

interface StepOneProps {
  form: UseFormReturn<ApplicationFormData>;
}

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe", 
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", 
  "Taraba", "Yobe", "Zamfara", "Diaspora / International"
];

export default function StepOnePersonal({ form }: StepOneProps) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Info Banner */}
      <div className="bg-gradient-to-r from-teal-50 via-emerald-50/50 to-white p-5 rounded-2xl border border-teal-100/80 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-600/20">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-teal-950">Applicant Profile & Credentials</h3>
          <p className="text-sm text-teal-800/80 mt-0.5 leading-relaxed">
            Please enter your accurate contact information. Your <strong>official confirmation email</strong> and registration slip will be sent to the email address provided here.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-teal-600" />
            Full Name (Official / Legal) <span className="text-rose-500">*</span>
          </label>
          <input
            {...register("fullName")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="e.g. Dr. Aisha Amina Bello"
          />
          {errors.fullName && <p className="text-rose-500 text-xs font-semibold mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            Gender Preference <span className="text-rose-500">*</span>
          </label>
          <select
            {...register("gender")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 font-medium text-sm shadow-sm"
          >
            <option value="Female">Female</option>
            <option value="Male">Male (Ally / Volunteer)</option>
            <option value="Other">Prefer not to say</option>
          </select>
          {errors.gender && <p className="text-rose-500 text-xs font-semibold mt-1">{errors.gender.message}</p>}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-teal-600" />
            Email Address (For Confirmation Letter) <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="member@gmail.com"
          />
          <p className="text-[11px] text-teal-700 font-medium flex items-center gap-1">
            ✓ We will deliver your induction pass and reference code here.
          </p>
          {errors.email && <p className="text-rose-500 text-xs font-semibold mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            Active Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="+234 800 000 0000"
          />
          {errors.phone && <p className="text-rose-500 text-xs font-semibold mt-1">{errors.phone.message}</p>}
        </div>

        {/* State of Residence */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            State / Chapter <span className="text-rose-500">*</span>
          </label>
          <select
            {...register("state")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 font-medium text-sm shadow-sm"
          >
            <option value="">Select State Chapter</option>
            {NIGERIAN_STATES.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="text-rose-500 text-xs font-semibold mt-1">{errors.state.message}</p>}
        </div>

        {/* LGA / City */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            Local Government Area / District <span className="text-rose-500">*</span>
          </label>
          <input
            {...register("lga")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="e.g. Ilorin South / Ikeja / Garki"
          />
          {errors.lga && <p className="text-rose-500 text-xs font-semibold mt-1">{errors.lga.message}</p>}
        </div>

        {/* Residential Address */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            Residential / Office Address <span className="text-rose-500">*</span>
          </label>
          <input
            {...register("address")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="e.g. Plot 14 Ahmadu Bello Way, Ilorin"
          />
          {errors.address && <p className="text-rose-500 text-xs font-semibold mt-1">{errors.address.message}</p>}
        </div>

        {/* Occupation */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-teal-600" />
            Occupation / Profession
          </label>
          <input
            {...register("occupation")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
            placeholder="e.g. Registered Midwife / Student / Teacher"
          />
        </div>

        {/* Education */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            Highest Educational Qualification
          </label>
          <select
            {...register("education")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 font-medium text-sm shadow-sm"
          >
            <option value="">Select Level</option>
            <option value="Secondary / WAEC">Secondary School / SSCE</option>
            <option value="Diploma / NCE / OND">OND / NCE / Diploma</option>
            <option value="B.Sc / HND">Bachelor's Degree / HND</option>
            <option value="Postgraduate / Masters / Ph.D">Postgraduate / Masters / Doctorate</option>
            <option value="Other">Other Certificate</option>
          </select>
        </div>
      </div>
    </div>
  );
}