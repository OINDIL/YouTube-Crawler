import React from 'react'
import { useContext,createContext } from 'react'

const AllContext = createContext();
export const useAllContext = () => useContext(AllContext);

export function AuthContext({ children }) {
  return (
    <AllContext.Provider>
        {children}
    </AllContext.Provider>
  )
}