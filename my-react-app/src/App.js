import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to TJCP "Hello World" Project.
        </p>
        <p>  <Link to="/login" style={{color:"red"}}>Login</Link></p>
        <p>  <Link to="/signup" style={{color:"red"}} >Signup</Link></p>
      </header>
    </div>
  );
}

export default App;

