import logo from "./todopostit.png";
import AddToDo from "./AddTodo";
import ListToDoV2 from "./ListToDoV2";
import React from "react";


class HeaderFile extends Componets {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.appTitle}</h1>
                </header>
            </div>

        )
    }
}


export default Header;