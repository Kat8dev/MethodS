import { EventsWrapper } from '../styled/EventsWrapper';
import { AuthContext } from '../context/AuthContext';
import { useEffect, useState, useContext } from 'react';
import axios from "axios";

const Events = () => {
    const [events, setEvents] = useState([]);
    const { user } = useContext(AuthContext);

    const fetchPost = async () => {
        try {
            const res = await axios.get("posts/timeline/" + user._id);
            setEvents(
                res.data.sort((A1, A2) => {
                    return new Date(A2.createdAt) - new Date(A1.createdAt);
                }).filter(event => event.eventDate)
            );
        } catch {
            // TODO: add bugsnag
        }
    }

    useEffect(() => {
        fetchPost();
    }, [user && user._id]);


    return (
        <EventsWrapper>
            <div className='header'>
                <h2>Eventos recientes</h2>
            </div>
            {
                events.map((item) => (
                    <div key={item._id} className="event_card">
                        <h4><span>Título del evento:</span>{item.textTitle}</h4>
                        <p><span>Acerca de:</span>{item.desc}</p>
                        <p><span>fecha:</span>{item.eventDate}</p>
                        <p><span>dirrectión:</span>{item.eventLocation}</p>
                    </div>
                ))
            }
        </EventsWrapper>
    );
};

export default Events;
