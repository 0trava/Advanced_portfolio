import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import "./App.css";
import { Skills } from "components/Skills";


export const App = () =>  {
  return (
    <div  className="App">
      <NavBar></NavBar>
      <Banner />
      
      <Skills />
    </div>
  );
}

// export default App;
