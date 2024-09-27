"use client";
import Header from "../components/Header";
import { useEffect, useState } from "react";

type Event = {
    id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    category: string;
    image: string;
};

export default function Event() {

    const [events, setEvents] = useState<Event[]>([]);

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
                    <li key={event.id}>
                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}