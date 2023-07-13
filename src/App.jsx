import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import "./App.css";


export const App = () =>  {
  return (
    <div  className="App">
      <NavBar></NavBar>
      <Banner />
    </div>
  );
}

// export default App;
