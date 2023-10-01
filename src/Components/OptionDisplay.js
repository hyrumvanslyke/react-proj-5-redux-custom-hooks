import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
const OptionDisplay = () => {
  let currentPotential = useSelector(selectPotentials);
  console.log(currentPotential);
  return (
    <div className="stack">
      {currentPotential.map((e, i) => {
        return (
          <h2 key={e.name.official} className="country-option">
            {e.name.common}
          </h2>// ask about why the key is important and why .map would not be working
        );
      })}
    </div>
  );
};

export default OptionDisplay;
