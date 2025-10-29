import { NextResponse } from "next/server";
import { createStripeCheckout } from "@/lib/stripe";

export async function POST(request: Request) {
  const { items, email } = await request.json();

  try {
    const session = await createStripeCheckout(items, email);
    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
