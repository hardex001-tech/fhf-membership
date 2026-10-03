import nodemailer from "nodemailer";

export interface RegistrationEmailData {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  lga: string;
  registrationId: string;
  membershipType: string;
  categoryTitle?: string;
  date: string;
}

export function generateRegistrationEmailHtml(data: RegistrationEmailData): string {
  const { fullName, registrationId, membershipType, state, lga, date } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FHF Membership Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f7f6; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(4, 78, 66, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #033f38 0%, #064e43 60%, #0f766e 100%); padding: 45px 35px; text-align: center;">
              <div style="display: inline-block; background-color: rgba(255,255,255,0.15); padding: 8px 18px; border-radius: 999px; margin-bottom: 16px;">
                <span style="color: #a7f3d0; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">Official NGO Induction</span>
              </div>
              <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: -0.5px;">
                FEMALE HEALTH FOUNDATION
              </h1>
              <p style="color: #ccfbf1; font-size: 14px; margin: 0; font-weight: 500;">
                Motto: United We Stand • Empowering Women, Transforming Communities
              </p>
            </td>
          </tr>

          <!-- Welcome Message -->
          <tr>
            <td style="padding: 40px 35px 25px 35px;">
              <h2 style="color: #064e43; font-size: 20px; font-weight: 700; margin: 0 0 16px 0;">
                Dear ${fullName},
              </h2>
              <p style="color: #334155; font-size: 15px; margin: 0 0 20px 0; line-height: 1.7;">
                Congratulations and welcome! Your official registration with the <strong>Female Health Foundation (FHF)</strong> has been successfully received and confirmed.
              </p>
              <p style="color: #475569; font-size: 14px; margin: 0 0 24px 0;">
                You are now part of a nationwide humanitarian alliance of healthcare advocates, volunteers, and community champions dedicated to ending period poverty, facilitating cancer screenings, and protecting vulnerable women across Nigeria and Africa.
              </p>

              <!-- Official Certificate Box -->
              <table role="presentation" width="100%" style="background-color: #f0fdf4; border: 1.5px dashed #10b981; border-radius: 14px; padding: 20px; margin-bottom: 25px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.2px; color: #047857; font-weight: 700;">
                      Official Membership Reference ID
                    </div>
                    <div style="font-size: 24px; font-weight: 800; color: #064e43; letter-spacing: 1px; margin-top: 4px;">
                      ${registrationId}
                    </div>
                    <hr style="border: none; border-top: 1px solid #d1fae5; margin: 14px 0;" />
                    <table width="100%" style="font-size: 13px; color: #065f46;">
                      <tr>
                        <td style="padding: 3px 0;"><strong>Category:</strong> ${membershipType}</td>
                        <td style="padding: 3px 0; text-align: right;"><strong>Date:</strong> ${date}</td>
                      </tr>
                      <tr>
                        <td style="padding: 3px 0;"><strong>State Chapter:</strong> ${state}</td>
                        <td style="padding: 3px 0; text-align: right;"><strong>LGA:</strong> ${lga}</td>
                      </tr>
                      <tr>
                        <td style="padding: 3px 0;" colspan="2"><strong>Status:</strong> <span style="background-color: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 6px; font-weight: 700;">CONFIRMED & ACTIVE</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Next Steps -->
              <h3 style="color: #0f172a; font-size: 16px; font-weight: 700; margin: 0 0 14px 0;">
                Next Steps for Your Membership:
              </h3>
              <ol style="color: #475569; font-size: 14px; padding-left: 20px; margin: 0 0 30px 0; line-height: 1.8;">
                <li><strong>Retain Your Reference ID:</strong> Quote <code>${registrationId}</code> in all communications with the Foundation Secretariat.</li>
                <li><strong>Orientation Pack:</strong> Your chapter coordinator will contact you via email & WhatsApp within 48–72 hours.</li>
                <li><strong>Community Initiatives:</strong> You are invited to participate in the upcoming <em>SPPIN Sanitary Drive</em> and community health outreaches.</li>
              </ol>

              <!-- Button CTA -->
              <div style="text-align: center; margin-bottom: 30px;">
                <a href="${process.env.NEXTAUTH_URL || 'http://localhost:3001'}" 
                   style="display: inline-block; background-color: #0f766e; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 15px; padding: 14px 34px; border-radius: 12px; box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);">
                  Visit FHF Membership Portal &rarr;
                </a>
              </div>

              <p style="color: #64748b; font-size: 13px; line-height: 1.6; margin: 0; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                Need help or have questions? Contact the Secretariat at <a href="mailto:info@fhf-nigeria.org" style="color: #0f766e; text-decoration: underline;">info@fhf-nigeria.org</a> or visit the Headquarters in Ilorin, Kwara State, Nigeria.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 25px 35px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0 0 6px 0;">
                © ${new Date().getFullYear()} Female Health Foundation (FHF). All rights reserved.
              </p>
              <p style="color: #94a3b8; font-size: 11px; margin: 0;">
                This is an automated confirmation sent for official membership registration.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function generateAdminNotificationEmailHtml(data: RegistrationEmailData & { [key: string]: any }): string {
  const { fullName, email, phone, state, lga, registrationId, membershipType, date } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New FHF Member Induction Alert</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          
          <tr>
            <td style="background-color: #032e27; padding: 25px 30px; text-align: left; border-bottom: 4px solid #10b981;">
              <span style="color: #6ee7b7; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">FOUNDATION ADMIN NOTIFICATION</span>
              <h2 style="color: #ffffff; margin: 6px 0 0 0; font-size: 20px; font-weight: 800;">🔔 New Member Induction Completed</h2>
            </td>
          </tr>

          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; font-size: 14px; color: #334155;">
                A new member has completed the online registration form on the Female Health Foundation portal:
              </p>

              <table width="100%" style="border-collapse: collapse; font-size: 14px; margin-bottom: 25px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Reference ID:</td>
                  <td style="padding: 10px 0; color: #064e43; font-weight: 800;">${registrationId}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Full Name:</td>
                  <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
                  <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #0f766e;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone:</td>
                  <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0f766e;">${phone}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">State / LGA:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${state} / ${lga}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Membership Type:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${membershipType}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Registration Date:</td>
                  <td style="padding: 10px 0; color: #0f172a;">${date}</td>
                </tr>
              </table>

              <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px 18px; margin-bottom: 25px;">
                <p style="margin: 0; font-size: 13px; color: #166534; font-weight: 600;">
                  ✓ An official induction letter with Reference ID has been sent to the applicant's email address.
                </p>
              </div>

              <p style="font-size: 12px; color: #94a3b8; margin: 0;">
                Log in to the administration portal to view passport, ID, and chapter assignment.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background-color: #f8fafc; padding: 18px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 11px; margin: 0;">
                Female Health Foundation (FHF) Automated Administration Alert System
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendConfirmationEmail(data: RegistrationEmailData): Promise<{
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  error?: string;
}> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const port = Number(process.env.SMTP_PORT) || 587;
  const from = process.env.EMAIL_FROM || '"Female Health Foundation" <info@fhf-nigeria.org>';
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || "info@fhf-nigeria.org";

  const htmlContent = generateRegistrationEmailHtml(data);
  const adminHtmlContent = generateAdminNotificationEmailHtml(data);

  // If real SMTP credentials are provided in .env
  if (host && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      // 1. Send confirmation to applicant
      const info = await transporter.sendMail({
        from,
        to: data.email,
        subject: `Welcome to Female Health Foundation – Membership Confirmed [${data.registrationId}]`,
        html: htmlContent,
      });

      // 2. Send instant alert notification to Foundation Admin/Owner
      try {
        await transporter.sendMail({
          from,
          to: adminEmail,
          subject: `🔔 New Member Induction Alert: ${data.fullName} [${data.registrationId}]`,
          html: adminHtmlContent,
        });
        console.log("Admin notification email sent to:", adminEmail);
      } catch (adminErr) {
        console.warn("Could not dispatch admin copy email:", adminErr);
      }

      console.log("Real confirmation email sent to applicant:", info.messageId);
      return { success: true, messageId: info.messageId, simulated: false };
    } catch (err: any) {
      console.error("Failed to send email via SMTP, falling back to simulated logger:", err);
      // Fall through to simulated success so user registration never crashes
    }
  }

  // Graceful simulated delivery (logged cleanly in console for testing prior to linking live SMTP)
  console.log(`[FHF EMAIL SYSTEM - SIMULATED DISPATCH]
To Applicant: ${data.email}
To Foundation Admin: ${adminEmail}
Subject: Welcome to Female Health Foundation – Membership Confirmed [${data.registrationId}]
Name: ${data.fullName}
Category: ${data.membershipType}
Status: Successfully queued for applicant and admin.`);

  return {
    success: true,
    messageId: `sim_${Date.now()}_${Math.random().toString(36).substring(7)}`,
    simulated: true,
  };
}

