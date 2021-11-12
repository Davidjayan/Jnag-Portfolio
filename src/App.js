
import './App.css';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Contact from './Components/Contact';
import PrayerRequest from './Components/PrayerRequest';
import Watch from './Components/Watch';
import Home from './Components/Home';
import Ministries from './Components/Ministries';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return(
    <div className="background">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
      <div className="box4"></div>
      <div className="box5"></div>
      <div className="box6"></div>
      <div className="box7"></div>
  <div className="App-Body">
    
  <Header/>
  <Router>
    <Switch>
   
      <Route exact path="/Home"><Home/></Route>
      <Route exact path="/About"><About/></Route>
      <Route exact path="/Prayer"><PrayerRequest/></Route>
      <Route exact path="/Ministries"><Ministries/></Route>
      <Route exact path="/Watch"><Watch/></Route>
    </Switch>
  </Router>
  <Contact/>
  </div>
  </div>
  )
}

export default App;
