import { NextRequest, NextResponse } from "next/server";

// In-memory set to deduplicate within a single function instance.
// For production, replace with a database or email service (e.g. ConvertKit, Mailchimp, Resend).
const seen = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = (body.email || "").trim().toLowerCase();
    const name = (body.name || "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (seen.has(email)) {
      return NextResponse.json({ message: "You're already subscribed!" });
    }

    // Log the subscriber — visible in Vercel function logs.
    // Replace this with an actual email service integration when ready.
    console.log(
      JSON.stringify({
        event: "new_subscriber",
        email,
        name: name || null,
        date: new Date().toISOString(),
      })
    );

    seen.add(email);

    return NextResponse.json({ message: "You're in. Watch your inbox." });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
