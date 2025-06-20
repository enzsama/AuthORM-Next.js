"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface Params {
  to: string;
  subject: string;
  template: string;
}

const sendMail = async ({ to, subject, template }: Params) => {
  try {
    if (!process.env.EMAIL_FROM)
      return NextResponse.json(
        { error: "EMAIL_FROM env variable is not set" },
        { status: 500 }
      );
    if (!process.env.RESEND_API_KEY)
      return NextResponse.json(
        { error: "RESEND_API_KEY env variable is not set" },
        { status: 500 }
      );

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: to.toLowerCase().trim(),
      subject: subject.trim(),
      html: template,
    });

    if (error)
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );

    return data;
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

export default sendMail;
