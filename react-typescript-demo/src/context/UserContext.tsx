import { createContext, useState } from "react";

export type Authuser = {
    name:string;
    email:string;
}

type ChildrenProps = {
    children:React.ReactNode
}

type UserContextType = {
    user:Authuser | null,
    setUser: React.Dispatch<React.SetStateAction<Authuser | null>>
}

export const AuthContext = createContext<UserContextType>({} as UserContextType)

export const AuthContextProvider = ({children}:ChildrenProps) => {

    const [user,setUser] = useState<Authuser | null>(null)

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}