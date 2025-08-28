
import EventDetailedHeader from "./EventDetailedHeader"
import EventDetailedinfo from "./EventDetailedinfo"
import EventDetailedSidebar from "./EventDetailedSidebar"

function EventDetails() {
  return (
    <div className="flex gap-4 w-full mt-30">
      <div className="flex flex-col w-2/3 gap-3">
      <EventDetailedHeader/>
      <EventDetailedinfo/>
      
      </div>
      <div className="w-1/3">
    <EventDetailedSidebar/>
      </div>
    </div>
  )
}
export default EventDetails