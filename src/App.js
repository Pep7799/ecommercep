import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Ladies } from "./components/Ladies";
import { Men } from "./components/Men";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      
      <Men/>
      <Ladies/>
      <About/>
     
      <Contact/>
      {/*<Carts/>*/}
    </div>
  );
}

export default App;
