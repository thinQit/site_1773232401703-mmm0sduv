import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const restaurantEmail = process.env.RESTAURANT_EMAIL;
  const emailApiKey = process.env.EMAIL_API_KEY;
  const emailFrom = process.env.EMAIL_FROM ?? restaurantEmail;

  if (!restaurantEmail || !emailApiKey || !emailFrom) {
    throw new Error(
      "Email environment variables are missing. Required: RESTAURANT_EMAIL, EMAIL_API_KEY, EMAIL_FROM (or RESTAURANT_EMAIL)."
    );
  }

  // Placeholder for provider integration (Resend, SendGrid, SES, etc.)
  // Use emailApiKey to authenticate with your provider.
  console.info("Contact email dispatch queued", {
    toRestaurant: restaurantEmail,
    fromGuest: payload.email,
    contact: payload,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      ...parsed.data,
      message: parsed.data.message.trim(),
    };

    await sendContactEmail(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully. We’ll reply as soon as we can.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to send message at this time.",
      },
      { status: 500 }
    );
  }
}
