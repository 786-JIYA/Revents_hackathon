import {users} from '../../../lib/data/sampleData';

function EventDetailedSidebar() {
  return (
    <div className="card bg-base-100">
      <div className="card-title rounded-t-lg justify-center bg-gradient-to-r ">
        2 People Going
      </div>
      <div className="card-body">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 align-middle items-center">
            <div className="avatar">
              <div className="w-16 rounded">
                <img src={users[0].photoURL} alt="user avatar" />
              </div>
            </div>
            <span className='text-2xl'>Bob</span>
          </div>
        </div>

      </div>

    </div>
  )
}
export default EventDetailedSidebar