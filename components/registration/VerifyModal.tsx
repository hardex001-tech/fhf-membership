"use client";

import { useState } from "react";
import { Search, CheckCircle2, AlertCircle, X, ShieldCheck } from "lucide-react";

interface VerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VerifyModal({ isOpen, onClose }: VerifyModalProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/api/verify?q=${encodeURIComponent(query.trim())}`);
      const data = await res.json();

      if (!res.ok || !data.found) {
        setError(data.message || "No verified registration record found for this search.");
      } else {
        setResult(data.record);
      }
    } catch (err: any) {
      setError("An error occurred while verifying credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Verify NGO Membership</h3>
            <p className="text-xs text-slate-500">Lookup registration by Reference ID, Email, or Phone</p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="space-y-4 mb-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. FHF-2026-74912 or user@email.com"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 outline-none text-sm transition-all shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-teal-600/20 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Searching National Registry..." : "Verify Credential"}
          </button>
        </form>

        {error && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-800 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {result && (
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                Verified Member
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Active
              </span>
            </div>

            <div className="text-sm">
              <h4 className="font-extrabold text-teal-950 text-base">{result.fullName}</h4>
              <p className="text-xs text-teal-800 font-mono mt-0.5">{result.registrationId}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-1 text-slate-700">
              <div>
                <span className="text-slate-400 block text-[10px]">Category</span>
                <span className="font-semibold">{result.membershipType}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Chapter</span>
                <span className="font-semibold">{result.state} State</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
