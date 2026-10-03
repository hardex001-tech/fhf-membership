import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendConfirmationEmail, generateRegistrationEmailHtml } from "@/lib/email";
import { registrationsStore } from "@/lib/store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      state,
      lga,
      gender,
      dob,
      address,
      occupation,
      education,
      membershipType = "General Advocate",
      reasonToJoin,
      skills,
      volunteerExp,
      previousOrg,
      emergeName,
      emergeRelation,
      emergePhone,
      passportUrl,
      idType,
      idUrl,
    } = body;

    if (!fullName || !email || !phone || !state || !lga) {
      return NextResponse.json(
        { error: "Full name, email, phone number, state, and LGA are required." },
        { status: 400 }
      );
    }

    // Generate Official FHF Registration ID: e.g. FHF-2026-84729
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const year = new Date().getFullYear();
    const registrationId = `FHF-${year}-${randomSuffix}`;
    const dateFormatted = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Send confirmation email
    const emailResult = await sendConfirmationEmail({
      fullName,
      email,
      phone,
      state,
      lga,
      registrationId,
      membershipType,
      date: dateFormatted,
    });

    // Save in database (with graceful fallback to in-memory store)
    let dbSuccess = false;
    try {
      if (prisma && prisma.user) {
        await prisma.user.create({
          data: {
            fullName,
            email,
            phone,
            state,
            lga,
            membershipType,
            isVerified: true,
          },
        });
        dbSuccess = true;
      }
    } catch (dbErr) {
      console.warn("Database connection unavailable or failed, stored in resilient cache:", dbErr);
    }

    // Store in our persistent local store
    registrationsStore.add({
      id: registrationId,
      registrationId,
      fullName,
      email,
      phone,
      state,
      lga,
      membershipType,
      gender,
      dob,
      address,
      occupation,
      education,
      reasonToJoin,
      skills,
      emergeName,
      emergePhone,
      emergeRelation,
      createdAt: new Date().toISOString(),
      emailStatus: emailResult.simulated ? "simulated" : "sent",
    });

    const emailHtmlPreview = generateRegistrationEmailHtml({
      fullName,
      email,
      phone,
      state,
      lga,
      registrationId,
      membershipType,
      date: dateFormatted,
    });

    return NextResponse.json({
      success: true,
      registrationId,
      fullName,
      email,
      phone,
      state,
      lga,
      membershipType,
      issuedAt: dateFormatted,
      emailSent: emailResult.success,
      simulatedEmail: emailResult.simulated ?? false,
      messageId: emailResult.messageId,
      emailHtmlPreview,
      dbSaved: dbSuccess,
      message: `Registration confirmed! A confirmation email has been dispatched to ${email}.`,
    });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your registration. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const records = registrationsStore.getAll();
  return NextResponse.json({
    total: records.length,
    recent: records.slice(0, 10),
  });
}
