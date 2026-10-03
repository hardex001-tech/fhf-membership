// In-memory & resilient fallback storage for registrations when DB is offline
export interface StoredRegistration {
  id: string;
  registrationId: string;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  lga: string;
  membershipType: string;
  gender?: string;
  dob?: string;
  address?: string;
  occupation?: string;
  education?: string;
  reasonToJoin?: string;
  skills?: string[];
  emergeName?: string;
  emergePhone?: string;
  emergeRelation?: string;
  createdAt: string;
  emailStatus: "sent" | "simulated" | "pending";
}

// Global store to persist across Next.js dev server reloads
const globalStore = global as unknown as { __fhf_registrations?: StoredRegistration[] };
if (!globalStore.__fhf_registrations) {
  globalStore.__fhf_registrations = [];
}

export const registrationsStore = {
  add: (reg: StoredRegistration) => {
    globalStore.__fhf_registrations!.unshift(reg);
    return reg;
  },
  getAll: () => {
    return globalStore.__fhf_registrations || [];
  },
  findByIdOrEmail: (query: string) => {
    const q = query.trim().toLowerCase();
    return (globalStore.__fhf_registrations || []).find(
      (r) => r.registrationId.toLowerCase() === q || r.email.toLowerCase() === q || r.phone === q
    );
  },
};
