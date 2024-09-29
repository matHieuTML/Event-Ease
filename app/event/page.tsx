"use client";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Link from "next/link";

type Event = {
    _id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    category: string;
    image: string;
};

export default function Event() {

    const [events, setEvents] = useState<Event[]>([]);
    console.log(events);

    useEffect(() => {
        fetch('/api/events')
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []);
    


    return (
        <div>
            <Header />
            <h1>Événements</h1>
            <p>Voici la liste des événements</p>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                        <Link href={`/event/${event._id}`}>
                            <p>Voir</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}