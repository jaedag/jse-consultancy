"use client";

import Link from "next/link";
import { useModal } from "./modal";

export default function MobileNav(){
    const {setOpen} = useModal();

    return(
        <nav className="flex gap-6 flex-col justify-center grow w-fit align-center">
        <Link href={"/"} onClick={() => {setOpen(false) }}>Home</Link>
        <Link href={"/"} onClick={() => {setOpen(false) }}>Our Services</Link>
        <Link href={"/"} onClick={() => {setOpen(false) }}>About Us</Link>
        <Link href={"/"} onClick={() => {setOpen(false) }}>Publications</Link>
    </nav>
    )
}