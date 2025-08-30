import { useParams } from "react-router";
import type { FirestoreAppEvent } from "../../../lib/types";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../lib/firebase/firebase";
import { selectEvent } from "../eventSlice";

import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedinfo from "./EventDetailedinfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

function EventDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const selectedEvent = useAppSelector(state => state.event.selectedEvent);

  useEffect(() => {
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, 'events', id), (docSnap) => {
      if (docSnap.exists()) {
        dispatch(selectEvent({ ...docSnap.data(), id: docSnap.id } as FirestoreAppEvent));
      }
    });

    return () => unsubscribe();
  }, [id, dispatch]);

  if (!selectedEvent) return <div>Loading event...</div>;

  return (
    <div className="flex gap-4 w-full mt-30">
      <div className="flex flex-col w-2/3 gap-3">
        <EventDetailedHeader event={selectedEvent} />
        <EventDetailedinfo event={selectedEvent} />
      </div>
      <div className="w-1/3">
        <EventDetailedSidebar event={selectedEvent} />
      </div>
    </div>
  );
}

export default EventDetails;
