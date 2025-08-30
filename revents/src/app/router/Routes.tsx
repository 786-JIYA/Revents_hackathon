import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventForms from "../../features/events/form/EventForms";
import EventDetails from "../../features/events/details/EventDetails";
import EventDetailedPage from "../../features/events/EvenDetailedPage";
import EventDetailedHeader from "../../features/events/details/EventDetailedHeader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {  path: "/", element:<HomePage/>  },
            {  path: "events", element:<EventDashboard />  },
            {  path: "events/:id", element:<EventDetails/>  },
            {  path: "manage/:id", element:<EventForms/>  },
            {  path: "createEvent", element:<EventForms/>  },

        ]
    }
]); 