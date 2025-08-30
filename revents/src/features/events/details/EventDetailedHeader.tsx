import type { AppEvent } from "../../../lib/types";
import {Link} from "react-router";

function EventDetailedHeader({event}:{event:AppEvent}) {

    if (!event) return <div>Loading...</div>;


  return (
    <div className="card bg-base-100 ml-20" >
      <figure className="h-64 brightness-50 ">
        <img 
        src={`/categoryImages/${event.category}.jpg`} 
        alt="event category image"
        className="w-full object-cover"
        />
      </figure>


      <div className="card-body justify-end text-white absolute bottom-0 w-full">
        <div className="flex justify-between">
           <div>
              <h2 className="card-title text-4xl">{event.title}</h2>
               <p>{event.date}</p>
              <p>Hosted by Bob</p>
    </div>
    <div className="flex flex-col justify-end">
      <Link to={`/manage/${event?.id}`} className="btn btn-secondary">
      Manage Event
      </Link>
      <button className="btn btn-primary">Join Event</button>"
    </div>
        </div>
   
    </div> 
    </div>
  )
}
export default EventDetailedHeader