import { configureStore } from "@reduxjs/toolkit";
import displayedCountryReducer from "../redux/slices/displayCountrySlice"
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice"

export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer
  },
});
