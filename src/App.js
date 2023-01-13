import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {nombre:'julian' , apellido:'velez'},
      company: 'solutions',
    };
  }
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>hola {this.state.name.nombre} , {this.state.name.apellido} trabajo  {this.state.company} como Frontend</p>
          <button 
          onClick={() => {
            this.setState(() => {
               return{
                 name:{name: 'fede' , apellido:'gost'}
               }
            }, () => {
              console.log(this.state);
            });
            // console.log(this.state);
          }}>cambiar nombre</button>
        </header>
      </div>
    );
  } 
}

export default App;

