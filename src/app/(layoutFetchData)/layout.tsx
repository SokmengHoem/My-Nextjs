"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
    { name: "Home", href: "/dataFetching" },
    { name: "About", href: "/about" },
  ]

export default function AuthLayout({children}:{
    children:React.ReactNode;
}){
    const pathname = usePathname();
    return(
        <div>
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