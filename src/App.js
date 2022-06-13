import './App.css';
import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Input from "./components/Input";
import SignUpForm from "./components/SignUpForm";


class App extends Component {
  render() {
    return (
        <div className="App">
            <SignUpForm/>
        </div>
    );
  }
}

export default App;
