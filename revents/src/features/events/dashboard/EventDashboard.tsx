import { useState,useEffect } from "react";
import { events } from "../../../lib/data/sampleData";
import EventCard from "./EventCard";
import type { AppEvent } from "../../../lib/types";

type Props = {
  formOpen : boolean;
  setFormOpen : (isOpen:boolean) => void;
  formToggle : (event: AppEvent| null) => void;
  selectedEvent : AppEvent | null;
  

}

export default function EventDashboard({formOpen,setFormOpen ,formToggle,selectedEvent}:Props) {

  const [appEvents , setAppEvents]=useState<AppEvent[]>([]);
 

  const handleCreateEvent = (event:AppEvent) => {
    setAppEvents((prevState)=>[...prevState,event]);}

  const handleUpdateEvent = (updatedEvent:AppEvent) => {
    setAppEvents((prevState)=> {
      return prevState.map(e => e.id === updatedEvent.id ? updatedEvent : e);
  });  
}

  const handleDeleteEvent = (eventId:string) => {
    setAppEvents((prevState) => prevState.filter(e => e.id !== eventId));
  }

  useEffect(() => {
    setAppEvents(events);
  
    return () => {
      setAppEvents([]);
    }
  }, [])
  

  return (
    <div className="flex flex-row w-full  gap-6">
      <div className="w-3/5 flex flex-col gap-4 ml-20 mt-25">
     
       {appEvents.map((event) => (
        <EventCard key={event.id} event={event}
       formToggle={formToggle}
       deleteEvent={handleDeleteEvent}
         />
      ))}
     
      </div>
      <div className="w-2/5">
      
          
      </div>
    </div>
  )
}
 