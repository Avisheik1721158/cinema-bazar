import './App.css';
import Bazar from './components/Bazar/Bazar';
import Header from './components/Header/Header';




function App() {
  return (
    <div>
      <Header></Header>
      <Bazar></Bazar>
      <div className='text'>
        <h2> Question Answer</h2>
        <h3> How react works? </h3>
        <p>
          React is JavaScript library which build fastest interactive user interface.
          when build application with react it build bunch of independent isolated and reusable components.
          Every react app has at least one component which prefer to as a root component. Root component represent entire application and control child component.
          Basically it help build single page and mobile application.

        </p>
        <h3> What is the difference between props and state? </h3>
        <p>
          The main difference of the props and data that state are mutable and props are immutable. Props pass properties from parent components. State define states in the component itself. State is set and changed by the object. props remain static. Both compose components with a different representation
        </p>
      </div>

    </div>
  );
}

export default App;
