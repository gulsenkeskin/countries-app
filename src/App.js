import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navi from "./components/Navi";
import LogButton from "./LogButton";
import CountryList from "./components/CountryList";
import Country from "./components/Country";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navi />
        <div className="container mt-2">
        <Switch>
        
            <Route component={CountryList} path="/" exact />

            <Route component={About} path="/about" />
            <Route component={LogButton(Contact)} path="/contact" />
            <Route component={Country} path="/:name" />
    
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
