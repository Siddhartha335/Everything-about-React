"use client"
import React,{useState} from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinkProps = {
    name:string,
    href:string
}

const navLinks:NavLinkProps[] = [
    {name:"Login",href:"/login"},
    {name:"Register",href:"/register"},
    {name:"Change Password",href:"/change-password"},
]

const layout = ({children}:{children:React.ReactNode}) => {
    const pathname  = usePathname()

    const [input,setInput] = useState("");

  return (
    <>
        {children}
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="bg-slate-200" /> <br />
        {navLinks.map((nav)=> {
            const isActive = pathname === nav.href || (pathname.startsWith(nav.href) && nav.href !== "/")
            return <Link href={nav.href} className={!isActive ? "text-blue-500" : "font-bold"} key={nav.name}>{nav.name}</Link>
        })}
    </>
  )
}

export default layout