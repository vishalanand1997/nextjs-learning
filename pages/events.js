import React, { useState } from 'react'
import { useRouter } from 'next/router';

function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList);
    const router = useRouter();

    const fetchSportCategory = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined, { shallow: true });
    }

    return (
        <div>
            <h1>List of Events</h1>
            <button onClick={() => fetchSportCategory()}>Sport Events</button>
            {events.map((event) => (
                <div key={event.id}>
                    <h2>
                        {event.id} {event.title} {event.date} | {event.category}
                    </h2>
                    <p>{event.description}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default EventList

export async function getServerSideProps(context) {
    const { query } = context;
    const { category } = query;
    const queryString = category ? `category=${category}` : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();

    return {
        props: {
            eventList: data
        }
    }
}