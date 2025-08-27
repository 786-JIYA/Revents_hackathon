import { useState } from "react";
import EventCard from "../../features/events/dashboard/EventCard";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import Navbar from "./nav/Navbar";
import { div } from "motion/react-client";

function App() {
  const[formOpen,setFormOpen]=useState(false);
  return (
    <div>
     <Navbar setFormOpen={setFormOpen} />
   <div className="container mx-auto mx-10">
     <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}  />
   </div>
     
    </div>
  );
};
export default App;
