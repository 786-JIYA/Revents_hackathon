import { Fragment } from "react";
import type { AppEvent } from '../../../lib/types';

export default function EventDetailedSidebar({ event }: { event: AppEvent }) {
  return (
    <div className="card bg-base-100">
      <div className="card-title rounded-t-lg justify-center bg-gradient-to-r">
        {event?.attendees.length} People Going
      </div>
      <div className="card-body">
        <div className="flex flex-col gap-3">
          {event?.attendees.map((attendee, index) => (
            <Fragment key={attendee.id}>
              <div className="flex gap-3 items-center justify-between">
                <div className="avatar">
                  <div className="w-16 rounded">
                    <img src={attendee?.photoURL || '/user.png'} alt="user avatar" />
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="text-2xl">{attendee.displayName}</span>
                  {event.hostUid === attendee.id && (
                    <div className="badge badge-info">Host</div>
                  )}
                </div>
              </div>

              {index < event.attendees.length - 1 && (
                <div className="divider my-0"></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
