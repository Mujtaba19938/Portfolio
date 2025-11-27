import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const

export async function POST(request: NextRequest) {
  const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key])

  if (missingEnvVars.length) {
    console.error("Missing email environment variables:", missingEnvVars.join(", "))
    return NextResponse.json(
      { success: false, error: "Email service is not configured. Please try again later." },
      { status: 500 },
    )
  }

  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body." }, { status: 400 })
  }

  const { name, email, subject, message } = body

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof subject !== "string" ||
    !subject.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 })
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_RECIPIENT = "khanani.devworks@gmail.com",
  } = process.env as Record<string, string | undefined>

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST!,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER!,
      pass: SMTP_PASS!,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New Contact Form Message - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 },
    )
  }
}
