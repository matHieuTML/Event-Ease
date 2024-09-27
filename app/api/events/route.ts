import { NextResponse } from "next/server";
import connect from "@/db/connect";
import Event from "@/models/Event";

export async function GET () {
    await connect();
    const events = await Event.find();
    return NextResponse.json(events);
}
