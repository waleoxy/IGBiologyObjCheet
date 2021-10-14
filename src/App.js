import './App.css';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import {Switch, Route} from "react-router"
import ProfilePage from './ProfilePage';
import TutorialsPage from './TutorialsPage';
import QuestionsPage from './QuestionsPage';
import Resources from './Resources';
import AboutPage from './AboutPage';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path = '/' exact component={HomePage}/>
        <Route path = '/profile'  component={ProfilePage}/>
        <Route path = '/tutorials'  component={TutorialsPage}/>
        <Route path = '/questions'  component={QuestionsPage}/>
        <Route path = '/resources'  component={Resources}/>
        <Route path = '/about' component={AboutPage}/>
      </Switch>
    </div>
  );
}

export default App;
