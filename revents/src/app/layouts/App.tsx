import { useState } from "react";
import EventCard from "../../features/events/dashboard/EventCard";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import Navbar from "./nav/Navbar";
import { div } from "motion/react-client";
import type { AppEvent } from "../../lib/types";

function App() {
  const[formOpen,setFormOpen]=useState(false);
   const[selectedEvent , setSelectedEvent]=useState<AppEvent | null>(null);
   const handleFormToggle = (event:AppEvent|null) => {
    if(formOpen) {
      setFormOpen(false);
      setTimeout(() => {
        setSelectedEvent(event);
        setFormOpen(true);
      },300);
    }else{
    setFormOpen(true);
    setSelectedEvent(event);}
   }
  return (
    <div>
     <Navbar formToggle={handleFormToggle} />
   <div className="container mx-auto mx-10">
     <EventDashboard 
     formOpen={formOpen} 
     setFormOpen={setFormOpen} 
     formToggle={handleFormToggle}
      selectedEvent={selectedEvent}


      />
   </div>
     
    </div>
  );
};
export default App;
