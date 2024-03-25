import { createContext } from "react";
import { theme } from "./theme";

type PropsType = {
    children:React.ReactNode
}

export const ThemeContext = createContext(theme)


export const ThemeContextProvider = ({children}:PropsType)=> {

    return (
        <>
            <ThemeContext.Provider value={theme}>
                 {children}
            </ThemeContext.Provider>
        </>
    )
}