import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";
const OptionDisplay = () => {
    const dispatch = useDispatch()
  let currentPotential = useSelector(selectPotentials);
  console.log(currentPotential);
  return (
    <div className="stack">
      {currentPotential.map((e, i) => {
        return (
          <h2 key={e.name.official} className="country-option"
          onClick={dispatch(setDisplayCountry(currentPotential[i]))}>
            {e.name.common}
          </h2>// ask about why the key is important and why .map would not be working
        );
      })}
    </div>
  );
};

export default OptionDisplay;
