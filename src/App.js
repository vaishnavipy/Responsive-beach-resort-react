
import './App.css';
import Navbar from "./components/navbar"
import {Switch,Route} from "react-router-dom"
import Home from "./components/home"
import Rooms from "./components/rooms"
import RoomDetails from "./components/roomDetails"


function App() {
  return (
    <div >
      <Navbar />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/rooms"><Rooms /></Route>
        <Route path="/rooms/:slug"><RoomDetails /></Route>
      </Switch>

    </div>
  );
}

export default App;
