import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to Meet You!" name="RoboKiller42" age="Infinity" /> */}
      {/* <StatefulGreeting name="RoboKiller42" age="Infinity" /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingFunctional connected={false}/> */}
      {/* <ConditionalRenderingClass /> */}
      <NestingComponents />
    </div>
  );
}

export default App;
