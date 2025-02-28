"use client"

import React, { createContext, useContext } from 'react'

type ThemeProps = {
  color:{
    primary: string,
    secondary: string,
    ternary?: string
  }
}

const defaultTheme:ThemeProps = {
  color:{
    primary:"#00d1b2",
    secondary:"#fdfffc"
  }
}

const ThemeContext = createContext<ThemeProps>(defaultTheme);

const ThemeProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)