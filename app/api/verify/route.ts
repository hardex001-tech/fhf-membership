import { NextResponse } from "next/server";
import { registrationsStore } from "@/lib/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ error: "Search query is required" }, { status: 400 });
  }

  const record = registrationsStore.findByIdOrEmail(q);

  if (!record) {
    return NextResponse.json({ found: false, message: "No registration found matching your reference ID, email, or phone." }, { status: 404 });
  }

  return NextResponse.json({
    found: true,
    record: {
      registrationId: record.registrationId,
      fullName: record.fullName,
      email: record.email,
      phone: record.phone,
      state: record.state,
      lga: record.lga,
      membershipType: record.membershipType,
      createdAt: record.createdAt,
      status: "Active Member",
    },
  });
}
