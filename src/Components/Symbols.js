import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = ()=>{
    const currentDisplay = useSelector(selectDisplay)
    return <div className="symbols">
        <div className="stack">
            <h2>Flag of {currentDisplay.name.common}:</h2>
            {currentDisplay.flags ? (
                <img src={currentDisplay.flags.png} alt="countries flag"/>
            ) : ("No Data Found")}
        </div>
        <div className="stack">
        <h2>{currentDisplay.name.common} Coat of Arms:</h2>
            {currentDisplay.coatOfArms ? (
                <img src={currentDisplay.coatOfArms.png} alt="countries coat of arms"/>
            ) : ("No Data Found")}
        </div>

    </div>
}

export default Symbols