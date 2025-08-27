import type { Attendee } from "../../../lib/types";

type Props = {
  attendees:Attendee[] ;
}
function EventAttendees({attendees}:Props) {
  return (
    <div className="avater-group -space-x-5">
        {attendees.map((attendee) => (
            <div key={attendee.id} className="avatar">
                <div className="w-12 rounded-full">
                     <img src={attendee.photoURL ||'/user.png'} alt="avatar" />
                </div>
               
            </div>

            ))}
    </div>
  )
}
export default EventAttendees