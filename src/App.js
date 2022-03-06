// import logo from './logo.svg';
import './App.css';
import Mainpage from './component/mainpage/mainpage.component';
// import Content from './component/container/container.component';
function App() {
  return (
    <div className="App">
      <Mainpage/>
   {/* < Content/> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
