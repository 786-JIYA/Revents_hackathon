import { PowerIcon, UserIcon } from '@heroicons/react/24/outline'
import { users } from '../../../lib/data/sampleData'
import { CalendarIcon } from '@heroicons/react/24/outline'
function UserMenu() {
    return (
        <div className="dropdown dropdown-bottom dropdown-center">
            <div tabIndex={0} role="button" className=" flex m-1 text-white text-xl font-semibold gap-3 items-center">
                <div className="avatar">
                    <div className="w-11 rounded-full">
                        <img src={users[0].photoURL} alt="user photo" />
                    </div>
                    <span>Bob</span>
                </div>

            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                    <div className="flex gap-3 items-center">
                        <UserIcon className="size-6" />
                        My Profile
                    </div>
                </li>
                
                <li>
                    <div className="flex gap-3 items-center">
                        <CalendarIcon className="size-6" />
                       Create Event
                    </div>
                </li>
                <div className="divider m-0"></div>
                  <li>
                    <div className="flex gap-3 items-center">
                        <PowerIcon className="size-6 text-error" />
                          Logout
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default UserMenu