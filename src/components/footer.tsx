import Image from "next/image";
import Spacer from "./spacer";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer(){
    return(
        <footer className="w-full flex justify-between p-4 items-center bg-blue-500 z-10 text-white mt-10">
            <Image
                alt="logo"
                src="/logo.webp"
                width={100}
                height={100}
            />
            <Spacer />
            <p className="text-sm">Copyright 2023</p>
            <Spacer />
            <div className="flex gap-4">
                <Link href="mailto:info@jseconsultancyis.com"><BiLogoGmail size={20} /></Link>
            </div>
        </footer>
    )
}