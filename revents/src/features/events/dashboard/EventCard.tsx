
import type { AppEvent } from "../../../lib/types"
import EventAttendees from "./EventAttendees"
import { Link } from "react-router";


type Props = {
  event : AppEvent;
  
}

function EventCard({event}:Props) {

    const host = event.attendees.find(x => x.id === event.hostUid);



    return (
      <div className="card card-dash bg-base-100 w-full text-white mt-5 ">
    <div className="card-body">
       <div className="flex gap-3 items-center">
         <figure className="card-figure w-14 rounded-lg">
           <img src={host?.photoURL || '/user.png'}
             alt="user avatar"/>
           </figure>
         <div>
          <h2 className="card-title">{event.title}</h2>
           <p className="text-sm text-neutral text-white">Created by {host?.displayName}</p>
    </div>
   </div>

      <div className="bg-base-200 -mx-6 my-3 py-2 px-4 border-y border-neutral/20">
        <EventAttendees attendees = {event.attendees}/>
      </div>

   
    <div className="card-actions flex">
      <div className="flex flex-1">
        {event.description}
      </div>
      <div>
           
      <Link to={`/events/${event.id}`} className="btn btn-primary">View</Link> 
      {/* <div className="flex gap-3">
        <button className="btn btn-primary btn-sm" onClick={()=>formToggle(event)}>Edit</button>
        <button className="btn btn-secondary btn-sm" onClick={()=>dispatch(deleteEvent(event.id))}>Delete</button> */}
      </div>
      </div>
    </div>
  </div>

    )
}
export default EventCard