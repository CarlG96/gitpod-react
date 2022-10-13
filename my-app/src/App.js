import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to Meet You!" name="RoboKiller42" age="Infinity" />
    </div>
  );
}

export default App;
