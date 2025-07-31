import { NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export async function POST(req) {
  console.log("Received webhook request");
  try {
    const body = await req.text();

    // Log the raw body to inspect the incoming webhook payload
    console.log("Incoming webhook body:", body);

    const headerSignature = headers().get("x-signature");

    if (!headerSignature) {
      return NextResponse.json({ error: "missing signature" }, { status: 400 });
    }

    const hmac = crypto.createHmac("sha256", process.env.LS_SIGNING_SECRET);
    const calculatedSignature = hmac.update(body).digest("hex");

    if (calculatedSignature !== headerSignature) {
      return NextResponse.json({ error: "invalid signature" }, { status: 400 });
    }

    const payload = JSON.parse(body);
    console.log("Parsed payload:", payload);

    const eventName = payload.meta.event_name;
    console.log("Event name:", eventName);

    if (eventName == "order_created") {
      await connectMongo();

      const user = await User.findById(payload.meta.custom_data.user_id);

      console.log(user);

      if (!user) {
        console.error("User not found:", payload.meta.custom_data.user_id);
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      user.hasAccess = true;
      user.customerId = payload.data.attributes.customer_id;

      await user.save();
    } else if (
      eventName == "subscription_expired" ||
      eventName == "subscription_payment_failed"
    ) {
      await connectMongo();

      const user = await User.findById(payload.meta.custom_data.user_id);

      user.hasAccess = false;

      await user.save();
    }

    return NextResponse.json({});
  } catch (e) {
    console.error("LemonSqueezy error: ", e?.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
