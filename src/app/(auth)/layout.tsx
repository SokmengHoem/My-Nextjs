"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
    {name: "Register", href:"/register"},
    {name: "Login", href:"/login"},
    {name: "Forgot password", href:"/forgot-password"},
    // {name: "Profile", href:"/profile"},
    // {name: "Settings", href:"/settings"},
    // {name: "Home", href:"/"},
];

export default function AuthLayout({children}:{
    children:React.ReactNode;
}){
    const pathname = usePathname();
    const [input, setInput] = useState("")
    return(
        <div>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="input here..." />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return(
                    <Link href={link.href} key={link.name}
                    className={isActive? "text-blue-700 underline" : ""}
                    >
                        <p>{link.name}</p>
                    </Link>
                )
            })}
            {children}
        </div>
    )
}