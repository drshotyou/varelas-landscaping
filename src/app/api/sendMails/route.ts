import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import fs from "fs";
import path from "path";
import { type ClientDetails } from "../../../types/clientDetails";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req: Request) {
  try {
    const { name, phone }: ClientDetails = (await req.json()) as ClientDetails;

    // Set up transporter, e.g., using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "varelaslandscapingnodemailer@gmail.com", // Your Gmail address
        pass: process.env.AP, // Your Gmail password
      },
    });

    // Load your EJS template
    const ejsFilePath = path.join(
      process.cwd(),
      "public/emailTemplates",
      "contactEmail.ejs",
    );
    const ejsTemplate: string = fs.readFileSync(ejsFilePath, "utf8");

    let htmlContent;
    try {
      htmlContent = ejs.render(ejsTemplate, {
        name: name,
        phone: phone,
      });
    } catch (error) {
      console.error("EJS Rendering Error:", error);
      return NextResponse.json(
        { success: false, error: "EJS Rendering Error" },
        { status: 500 },
      );
    }

    // Setup email data
    const mailOptions = {
      from: name, // sender address
      to: "rudy@varelaslandscapingllc.com,rudy@varelaslandscapingllc.land,varelaslandscapingnodemailer@gmail.com", // client's email address
      subject: "Nuevo contacto", // Subject line
      html: htmlContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error caught:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
