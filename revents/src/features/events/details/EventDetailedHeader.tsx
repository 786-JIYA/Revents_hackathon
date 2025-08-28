function EventDetailedHeader() {
  return (
    <div className="card bg-base-100 ml-20" >
      <figure className="h-64 brightness-50 ">
        <img 
        src={`/categoryImages/drinks.jpg`} 
        alt="event category image"
        className="w-full object-cover"
        />
      </figure>
      <div className="card-body justify-end text-white absolute bottom-0 w-full">
        <div className="flex justify-between">
           <div>
      <h2 className="card-title text-4xl">Event title</h2>
      <p>Event date</p>
      <p>Hosted by Bob</p>
    </div>
    <div className="flex flex-col justify-end">
      <button className="btn btn-primary">Join Event</button>"
    </div>
        </div>
   
    </div> 
    </div>
  )
}
export default EventDetailedHeader