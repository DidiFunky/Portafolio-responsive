import "../src/App.css"
import Banner from "./Components/containers/Banner";
import NavbarRes from './Components/containers/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import { Skills } from "./Components/containers/Skill";


function App() {
  return (
    <div className="App">
      <NavbarRes/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
