import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email credentials are not configured on the server." },
        { status: 500 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Save to Firestore
    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        createdAt: new Date().toISOString(),
      });
    } catch (dbError) {
      console.error("Firebase write error:", dbError);
      // We continue even if DB fails, so they still get the email
    }

    // Send the email
    await transporter.sendMail({
      from: `"AbanTechnologies Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: "New Newsletter Subscriber!",
      text: `You have a new newsletter subscriber: ${email}`,
      html: `
        <h3>New Newsletter Subscriber</h3>
        <p>A new user has subscribed to the AbanTechnologies newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Subscription successful" });
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json({ error: "Failed to subscribe. Please try again later." }, { status: 500 });
  }
}
