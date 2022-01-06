import Link from "next/link";
import Sidebar from "./sidebar";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
export default function Navbar(props: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const triggerSidebar = () => {
        console.log("Triggered!!");
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav
                className={`${props.className} fixed flex flex-row items-center justify-between w-screen px-6 pt-2 text-xl align-middle dark:bg-slate-700`}
            >
                <h1 className="text-3xl sm:underline font-title decoration-wavy decoration-indigo-500">
                    Simon Sardorf
                </h1>
                <ul className="flex-row hidden sm:flex">
                    <li>
                        <Link href="/">Latest </Link>
                    </li>
                    <li>
                        <Link href="/">Latest </Link>
                    </li>
                </ul>
                <button onClick={triggerSidebar}>
                    <MenuIcon className="w-12 sm:hidden" />
                </button>
            </nav>
        </>
    );
}
