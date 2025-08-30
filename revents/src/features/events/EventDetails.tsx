import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./EventList";
import EventDetailedPage from "./EvenDetailedPage";

import  EventDetailedHeader from "./details/EventDetailedHeader";
import type { AppEvent } from "../../lib/types";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetailedPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
