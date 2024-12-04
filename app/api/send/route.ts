import { EmailTemplate } from "@/components/contact-form/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["hello@brianbest.dev"],
      subject: "New brianbest.dev inquiry 🎉",
      react: EmailTemplate({
        firstName: email,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
