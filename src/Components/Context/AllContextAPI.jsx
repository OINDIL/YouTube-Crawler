import React, { createContext, useContext, useState } from 'react';
const AllContext = createContext();
export const useAllContext = () => useContext(AllContext);
export const ValueFormatterProvider = ({ children }) => {
  //* hover shadow state
  const [hover, setHover] = useState(null)

  //? Channel filter search
  const [countryCode, setCountryCode] = useState('IN')

  //? Category filter search
  const [catergoryCode, setCatergoryCode] = useState(1)

  //? API KEY CONTEXT
  const [apiKey, setApiKey] = useState('')
  //? API NAME CONTEXT
  const [apiName, setApiName] = useState('Choose A Key First')

  //? ACTIVE STATE
  const [active, setActive] = useState('channels')

  const handleActive = (link) => {
    setActive(link)
  }

  //? PROGRESS BAR STATE
  const [progress,setProgress] = useState(0)

  //? Search bar input state
  const [input, setInput] = useState('')


  //? FORMAT NUMBER METHOD
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
    <AllContext.Provider value={{ formatNumber, hover, setHover, countryCode, setCountryCode, catergoryCode, setCatergoryCode, apiKey, setApiKey, apiName, setApiName, active, setActive, handleActive,progress,setProgress,input, setInput }}>
      {children}
    </AllContext.Provider>
  );
};
