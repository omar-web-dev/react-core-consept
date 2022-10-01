// import logo from './logo.svg';
import './App.css';


function App() {
  const superMans = [
    {name : "Mohammad", reg : 'Islam'},
    {name : "Omar", reg : 'Islam'},
    {name : "Ali (R)", reg : 'Islam'}
  ]
  return (
    <div className="App">
      {superMans.map(superMan => <Person superManName={superMan.name} superReg={superMan.reg}></Person>)}
    </div>
  );
}


function Person(props){
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.superManName}</h1>
      <h3>{props.superReg}</h3>
    </div>
  )
}

export default App;

/**
 * import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

 */