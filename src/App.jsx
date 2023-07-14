import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import "./App.css";
import { Skills } from "components/Skills";
import { Projects } from "components/Projects";

export const App = () =>  {
  return (
    <div  className="App">
      <NavBar></NavBar>
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

// export default App;
