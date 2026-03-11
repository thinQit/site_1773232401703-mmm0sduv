import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";

type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  notes?: string;
};

async function sendReservationEmails(payload: ReservationPayload): Promise<void> {
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
  console.info("Reservation email dispatch queued", {
    toGuest: payload.email,
    toRestaurant: restaurantEmail,
    reservation: payload,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

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

    const payload: ReservationPayload = {
      ...parsed.data,
      notes: parsed.data.notes?.trim() || undefined,
    };

    await sendReservationEmails(payload);

    return NextResponse.json(
      {
        success: true,
        message:
          "Reservation request received. We’ll confirm by email shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to submit reservation request at this time.",
      },
      { status: 500 }
    );
  }
}
