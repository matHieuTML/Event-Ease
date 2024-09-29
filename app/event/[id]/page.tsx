"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Utiliser useParams au lieu de useRouter
import Header from "@/app/components/Header";

type Event = {
    _id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    category: string;
    image: string;
};

export default function EventSingle() {
    const { id } = useParams(); // Utiliser useParams pour récupérer l'id
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/events/${id}`)
                .then(response => response.json())
                .then(data => setEvent(data))
                .catch(error => console.error('Error fetching event:', error));
        }
    }, [id]);

    if (!event) {
        return (
            <div>
                <Header />
                <h1>Événement</h1>
                <p>Chargement...</p>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <h1>Événement</h1>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.category}</p>
            <p>{event.description}</p>
        </div>
    );
}
