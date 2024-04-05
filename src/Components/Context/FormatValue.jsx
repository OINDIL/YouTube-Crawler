import React, { createContext, useContext, useState } from 'react';
const ValueFormatterContext = createContext();
export const useValueFormatter = () => useContext(ValueFormatterContext);
export const ValueFormatterProvider = ({ children }) => {
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
    <ValueFormatterContext.Provider value={{ formatNumber }}>
      {children}
    </ValueFormatterContext.Provider>
  );
};
