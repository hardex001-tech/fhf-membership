"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "@/lib/validations/application";
import { UploadCloud, Image as ImageIcon, IdCard, CheckCircle2, Shield, Loader2 } from "lucide-react";

interface StepFourProps {
  form: UseFormReturn<ApplicationFormData>;
}

export default function StepFourDocuments({ form }: StepFourProps) {
  const { register, setValue, formState: { errors } } = form;
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [idFileName, setIdFileName] = useState<string | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingId, setUploadingId] = useState(false);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Local immediate preview
      const localUrl = URL.createObjectURL(file);
      setPhotoPreview(localUrl);
      setValue("passportUrl", localUrl);

      // Upload to local /api/upload
      setUploadingPhoto(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (data.url) {
          setValue("passportUrl", data.url);
          setPhotoPreview(data.url);
        }
      } catch (err) {
        console.warn("Upload fallback to local preview:", err);
      } finally {
        setUploadingPhoto(false);
      }
    }
  };

  const handleIdFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdFileName(file.name);
      setValue("idUrl", file.name);

      setUploadingId(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (data.url) {
          setValue("idUrl", data.url);
        }
      } catch (err) {
        console.warn("Upload fallback to file name:", err);
      } finally {
        setUploadingId(false);
      }
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-50 via-emerald-50/50 to-white p-5 rounded-2xl border border-teal-100 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-600/20">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-teal-950">Identification & Digital Member Badge</h3>
          <p className="text-sm text-teal-800/80 mt-0.5 leading-relaxed">
            Your photograph will appear on your official <strong>Female Health Foundation Digital Membership Pass</strong>. Files are securely stored directly on the foundation server.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Passport / Profile Picture Upload */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-teal-600" />
            Passport Photograph / Headshot
          </label>

          <div className="border-2 border-dashed border-teal-200/80 hover:border-teal-400 rounded-2xl p-6 text-center transition-all bg-white/70 hover:bg-white flex flex-col items-center justify-center min-h-[220px] relative group">
            {photoPreview ? (
              <div className="flex flex-col items-center space-y-3">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-teal-500/20 shadow-lg bg-slate-100">
                  <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                  {uploadingPhoto && (
                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {uploadingPhoto ? "Saving..." : "Photo Attached"}
                </div>
                <label className="text-xs text-teal-600 hover:text-teal-700 cursor-pointer font-semibold underline mt-1">
                  Change Photo
                  <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                </label>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <span className="text-sm font-bold text-slate-800">Click to upload photo</span>
                <span className="text-xs text-slate-500 mt-1">PNG, JPG or JPEG (Clear facial photo)</span>
                <span className="text-[11px] font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full mt-3">
                  Upload Headshot
                </span>
                <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
              </label>
            )}
          </div>
        </div>

        {/* Identity Document Verification */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
              <IdCard className="w-3.5 h-3.5 text-teal-600" />
              Official Identification Type
            </label>
            <select
              {...register("idType")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 font-medium text-sm shadow-sm"
            >
              <option value="NATIONAL_ID">National Identity Card (NIN / NIMC)</option>
              <option value="VOTERS_CARD">INEC Voter's Card (VIN)</option>
              <option value="DRIVERS_LICENSE">FRSC Driver's License</option>
              <option value="INTERNATIONAL_PASSPORT">International Passport</option>
              <option value="STUDENT_ID">Student ID / NYSC Call-up ID</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-teal-950">
              ID Number / NIN Slip Code (Optional)
            </label>
            <input
              {...register("idNumber")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium text-sm shadow-sm"
              placeholder="e.g. 11-digit NIN or ID number"
            />
          </div>

          <div className="space-y-2 pt-1">
            <label className="text-xs font-bold uppercase tracking-wider text-teal-950">
              Upload ID Slip / Card Scan (Optional)
            </label>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex items-center justify-between">
              <span className="text-xs text-slate-600 truncate max-w-[200px] flex items-center gap-2">
                {uploadingId && <Loader2 className="w-3.5 h-3.5 animate-spin text-teal-600" />}
                {idFileName || "No document selected"}
              </span>
              <label className="text-xs font-bold px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-teal-700 hover:border-teal-400 cursor-pointer shadow-sm transition-all">
                Browse File
                <input type="file" accept="image/*,.pdf" onChange={handleIdFileChange} className="hidden" />
              </label>
            </div>
            <p className="text-[11px] text-slate-500">
              Files are saved locally and securely on the FHF server registry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}