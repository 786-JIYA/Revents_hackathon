import { div } from "motion/react-client"
import type { AppEvent } from "../../../lib/types";

type Props = {
  formToggle : (event: AppEvent| null) => void;
}

function Navbar({formToggle}:Props) {
    return (

        <header className="p-3 w-full fixed top-0 z-50 bg-gradient-to-r from-primary to-black">
            <div className="flex align-middle items-center px-10 mx-auto gap-6 cursor-pointer">
                <a className="max-h-16 text-white flex items-center gap-3 border-r-white 
                border-r-2 pr-6">
                    <h3 className="text-2xl font-semibold text-white uppercase">re-events</h3>
                </a>
                <nav className="flex gap-3 my-2 uppercase text-lg text-white">
                    <a>Events</a>
                    <a onClick={()=>
                        formToggle(null)
                    }>Create</a>
                </nav>
                <div className="flex align-middle ml-auto gap-3">
                    <button className="btn bg-white text-black">Login</button>
                    <button className="btn  bg-white text-black">Register</button>
                </div>
            </div>
        </header>

    )
}
export default Navbar