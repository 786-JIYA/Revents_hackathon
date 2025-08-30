import { useEffect, useState } from "react";
import { db } from "../../lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";
import {Link} from 'react-router-dom';

export default function EventList() {
  const [events, setEvents] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <button onClick={() => navigate(`/events/${event.id}`)}>
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
