import { useState,useEffect } from "react";
import { events } from "../../../lib/data/sampleData";
import EventForms from "../form/EventForms";
import EventCard from "./EventCard";
import { AnimatePresence ,motion } from "motion/react";

type Props = {
  formOpen : boolean;
  setFormOpen : (isOpen:boolean) => void;
 
}

export default function EventDashboard({formOpen,setFormOpen}:Props) {

  const [appEvents , setAppEvents]=useState<AppEvent[]>([]);

  useEffect(() => {
    setAppEvents(events);
  
    return () => {
      setAppEvents([]);
    }
  }, [])
  

  return (
    <div className="flex flex-row w-full  gap-6">
      <div className="w-3/5 flex flex-col gap-4 ml-20 mt-25">
      <AnimatePresence>
        <motion.div
        initial={{opacity:0,x:-200}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-200}}
        transition={{duration:0.5 , type:'easeInOut'}}
        >
       {appEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      </motion.div>
      </AnimatePresence>
     
      </div>
      <div className="w-2/5">
     <AnimatePresence>
       {formOpen && (
        <motion.div
        initial={{opacity:0,x:200}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:200}}
        transition={{duration:0.3 , type:'easeInOut'}}>
          <EventForms setFormOpen={setFormOpen}/>
        </motion.div>
          
       )}
    </AnimatePresence>      
      </div>
    </div>
  )
}
 