import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";
import { appendToSheet } from "@/lib/google-sheets";

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = newsletterSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input.", issues: validation.error.issues },
        { status: 400 }
      );
    }

    const { email } = validation.data;

    // Add data to Firestore
    const docRef = await addDoc(collection(db, "newsletter_subscriptions"), {
      email,
      timestamp: serverTimestamp(),
    });

    // Append to Google Sheet (optional, non-blocking)
    if (process.env.GOOGLE_SHEETS_NEWSLETTER_ID) {
      const timestamp = new Date().toISOString();
      appendToSheet(process.env.GOOGLE_SHEETS_NEWSLETTER_ID, "Sheet1!A1", [
        [email, timestamp],
      ]);
    }

    return NextResponse.json(
      { message: "Subscribed successfully!", id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    // Check for specific errors, e.g., if the email already exists, though Firestore doesn't enforce uniqueness by default.
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
