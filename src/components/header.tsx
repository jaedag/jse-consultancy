import Link from "next/link";
import Spacer from "./spacer";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalTrigger, ModalBody, ModalContent, ModalProvider } from "./modal";

export default function Header() {
    return (
        <header className="w-full flex justify-between p-4 items-center bg-blue-400 fixed top-0 z-10 text-white">
            <h1>Logo</h1>
            <Spacer />
            <nav className="hidden md:flex gap-6">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Our Services</Link>
                <Link href={"/"}>About Us</Link>
                <Link href={"/"}>Publications</Link>
            </nav>
            <Spacer />
            <ModalProvider>
                <ModalTrigger className="p-4 rounded-full bg-gray-200 md:hidden">
                    <GiHamburgerMenu />
                </ModalTrigger>
                <ModalBody className=" rounded-2xl mx-4 text-black w-[60%] items-center">
                    <ModalContent className="justify-center">
                        <nav className="flex gap-6 flex-col justify-center grow w-fit align-center">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>Our Services</Link>
                            <Link href={"/"}>About Us</Link>
                            <Link href={"/"}>Publications</Link>
                        </nav>
                    </ModalContent>
                </ModalBody>
            </ModalProvider>
        </header>
    )
}