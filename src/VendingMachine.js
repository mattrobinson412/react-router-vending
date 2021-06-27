import React from "react";

import GranolaBar from "./GranolaBar";
import CandyBar from "./CandyBar";
import FruitBar from "./FruitBar";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Route exact path="/granola">
                    <GranolaBar />
                    </Route>
                    <Route exact path="/candy">
                    <CandyBar />
                    </Route>
                    <Route exact path="/fruit">
                    <FruitBar />
                    </Route>
                </BrowserRouter>
            </div>
        </div>
    
      );
}

export default VendingMachine;
