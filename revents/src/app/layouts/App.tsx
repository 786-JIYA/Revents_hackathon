
import Navbar from "./nav/Navbar";
import AnimatedOutlets from "../router/AnimatedOutlets";

function App() {

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto mx-10">
        <AnimatedOutlets/>     
      </div>

    </div>
  );
};
export default App;
