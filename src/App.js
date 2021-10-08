import './App.css';
import Navbar from './components/Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
      <HomePage/>
    </div>
  );
}

export default App;
