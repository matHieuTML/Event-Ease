import { NextResponse } from "next/server";
import connect from "@/db/connect";
import Event from "@/models/Event";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    await connect();
    const event = await Event.findById(params.id); // Trouver l'événement par ID
  
    if (!event) {
      return NextResponse.json({ message: 'Événement non trouvé' }, { status: 404 });
    }
  
    return NextResponse.json(event);
  }