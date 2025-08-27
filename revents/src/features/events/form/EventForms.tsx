import  { users } from "../../../lib/data/sampleData";

import type { AppEvent } from "../../../lib/types";  

type Props = {
  setFormOpen: (isOpen: boolean) => void;
  createEvent: (event:AppEvent) => void;
  selectedEvent: AppEvent | null;
    updateEvent : (event:AppEvent) => void;
  
   
}

function EventForms({ setFormOpen ,createEvent,selectedEvent,updateEvent}: Props) {

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  };

  const onSubmit = (formd: FormData) => {

    const data = Object.fromEntries(formd.entries()) as unknown as AppEvent;
   
    if(selectedEvent){
     updateEvent({...selectedEvent,...data});
      setFormOpen(false); 
      return;
    }else{
      
    createEvent({
      ...data,
        id: crypto.randomUUID(),
        hostUid : users[0].uid,
        attendees:[{
        id: users[0].uid,
        displayName: users[0].displayName,
        isHost: true,
        photoURL: users[0].photoURL
        }],
       });
       setFormOpen(false);
    }

  };


  return (
    <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full mt-25">
      <h3 className="text-2xl font-semibold text-center text-primary">
       {selectedEvent ? 'Edit Event' : 'Create Event'}
        </h3>
      <form action={onSubmit} className="flex flex-col w-full gap-3">

        <input 
        type="text" 
        defaultValue={initialValues.title}
        name="title" className="input input-lg w-full" 
        placeholder="Event Title" />
        <input 
         type="text" 
         defaultValue={initialValues.category}
        name="category" className="input input-lg w-full" placeholder="Category" />
        <input
        type="text" 
        defaultValue={initialValues.description}
        name="description" className="textarea textarea-lg w-full" placeholder="Description" />
        <input
         type="datetime-local" 
         defaultValue={initialValues.date ? new Date(initialValues.date).toISOString().slice(0,16) : ''}
         name="date" className="input input-lg w-full" placeholder="Date" />
        <input 
        type="text" 
        defaultValue={initialValues.city}
        name="city" className="input input-lg w-full" placeholder="City" />
        <input
        type="text"
        defaultValue={initialValues.venue}
        name="venue" className="input input-lg w-full" placeholder="Venue" />
        <div className="flex justify-end w-full gap-3">
          <button onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</button>
          <button type="submit" className="btn btn-neutral">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default EventForms