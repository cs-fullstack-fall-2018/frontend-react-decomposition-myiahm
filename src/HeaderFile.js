// KEY: Good Job! Well Done on all counts! :-)
import logo from "./todopostit.png";
import AddToDo from "./AddTodo";
import ListToDoV2 from "./ListToDoV2";
import React, {Component} from "react";


class HeaderFile extends Component {


    render() {
        return (
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.appTitle}</h1>
                </header>


        )
    }
}


export default HeaderFile;