import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to Meet You!" name="RoboKiller42" age="Infinity" /> */}
      <StatefulGreeting name="RoboKiller42" age="Infinity" />
    </div>
  );
}

export default App;
