import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function EventDetailedPage() {
  const { id } = useParams(); // /events/:id से id ले रहा है
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;
      const docRef = doc(db, "events", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEvent({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
      <p className="text-gray-500">{event.date}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  );
}
