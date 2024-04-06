import React, { createContext, useContext, useState } from 'react';
const AllContext = createContext();
export const useAllContext = () => useContext(AllContext);
export const ValueFormatterProvider = ({ children }) => {
  //* hover shadow state
  const [hover,setHover] = useState(null)

  //? Channel filter search
  const [countryCode, setCountryCode] = useState('IN')

  //? Category filter search
  const [catergoryCode, setCatergoryCode] = useState(1)

  const formatNumber = (number) => {
    if (isNaN(number)) {
      return "Invalid number";
    }
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(2) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(2) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(2) + "K";
    } else {
      return number.toString();
    }
  };

  return (
    <AllContext.Provider value={{ formatNumber,hover,setHover,countryCode,setCountryCode,catergoryCode, setCatergoryCode }}>
      {children}
    </AllContext.Provider>
  );
};
