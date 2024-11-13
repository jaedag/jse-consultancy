
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react"


const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};



export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer hover:opacity-[0.9] flex items-center"
            >
                {item} <ChevronDown className="translate-y-px" />
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative border border-transparent shadow-input flex justify-center space-x-4 px-2 py-6 text-white"
        >
            {children}
        </nav>
    );
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black "
        >
            {children}
        </Link>
    );
};


export default function NavigationDropDown() {
    const [active, setActive] = useState<string | null>(null);
    return (
        <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="•••">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/">News Flash / Updates</HoveredLink>
                    <HoveredLink href="/">Free Downloads</HoveredLink>
                    <HoveredLink href="/">Our Team</HoveredLink>
                    <HoveredLink href="/">Impact Assessments</HoveredLink>
                    <HoveredLink href="/">Philosophy</HoveredLink>
                    <HoveredLink href="/">Contact</HoveredLink>
                    <HoveredLink href="/">Legal Notice</HoveredLink>
                </div>
            </MenuItem>
        </Menu>
    )
}