
import './App.css';
import Navbar from "./components/navbar"
import {Switch,Route} from "react-router-dom"
import Home from "./components/home"
import Rooms from "./components/rooms"


function App() {
  return (
    <div >
      <Navbar />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/rooms"><Rooms /></Route>
      </Switch>

    </div>
  );
}

export default App;
