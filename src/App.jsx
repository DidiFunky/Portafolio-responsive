import "../src/App.css"
import Banner from "./Components/containers/Banner";
import NavbarRes from './Components/containers/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <NavbarRes/>
      <Banner/>
    </div>
  );
}

export default App;
