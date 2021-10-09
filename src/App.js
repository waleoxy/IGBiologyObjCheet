import './App.css';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import {Switch, Route} from "react-router"
import ProfilePage from './ProfilePage';
import TutorialsPage from './TutorialsPage';
import QuestionsPage from './QuestionsPage';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path = '/' exact component={HomePage}/>
        <Route path = '/profile'  component={ProfilePage}/>
        <Route path = '/tutorials' exact component={TutorialsPage}/>
        <Route path = '/questions' exact component={QuestionsPage}/>
      
      </Switch>
    </div>
  );
}

export default App;
