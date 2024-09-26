import Header from "../components/Header";

type Event = {
    id: string;
    title: string;
    description: string;
};

export default function Event() {

    //define a variable int in ts
    
    const events: Event[] = [
        {
            id: '1',
            title: 'Événement 1',
            description: 'Description de l\'événement 1'
        },
        {
            id: '2',
            title: 'Événement 2',
            description: 'Description de l\'événement 2'
        }
    ];

    return (
        <div>
            <Header />
            <h1>Événements</h1>
            <p>Voici la liste des événements</p>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}