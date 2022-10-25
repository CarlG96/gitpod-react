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
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCycleCDM from './components/LifeCycleCDM';
import LifeCycleCDMChild from './components/LifeCycleCDMChild';
import LifeCycleCDU from './components/LifeCycleCDU';
import LifeCycleCDUChild from './components/LifeCycleCDUChild';
import LifeCycleCWU from './components/LifeCycleCWU';
import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HttpRequests from './components/HttpRequests';
import HttpPost from './components/HttpPost';


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
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent className={CSS.NavBar}/> */}
      {/* <RenderingLists /> */}
      {/* <LifeCycleCDM /> */}
      {/* <LifeCycleCDU /> */}
      {/* <LifeCycleCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UnControlledForm /> */}
      {/* <SearchBar /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <UseStateWithObjects /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectCounterContainer /> */}
      {/* <HttpRequests /> */}
      <HttpPost />
    </div>
  );
}

export default App;
