import './App.css';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import {Switch, Route} from "react-router"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
      <HomePage/>
      </Switch>
    </div>
  );
}

export default App;
