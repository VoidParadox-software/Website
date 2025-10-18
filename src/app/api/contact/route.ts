import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";
import { appendToSheet } from "@/lib/google-sheets";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input.", issues: validation.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // Add data to Firestore
    const docRef = await addDoc(collection(db, "contact_messages"), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });

    // Append to Google Sheet (optional, non-blocking)
    if (process.env.GOOGLE_SHEETS_CONTACT_ID) {
      const timestamp = new Date().toISOString();
      appendToSheet(process.env.GOOGLE_SHEETS_CONTACT_ID, "Sheet1!A1", [
        [name, email, message, timestamp],
      ]);
    }

    return NextResponse.json(
      { message: "Message sent successfully!", id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
