import Link from "next/link";
import Sidebar from "./sidebar";
import { useState } from "react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const triggerSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar setIsOpen={setIsOpen} className={`${isOpen ? "w-screen h-screen absolute":"w-0 hidden h-0"}`} />
            <nav className="flex flex-row w-screen h-8 bg-slate-500">
                <h1>FauxOpus</h1>
                <ul className="flex flex-row">
                    <li>
                        <Link href="/">Latest </Link>
                    </li>
                    <li>
                        <Link href="/">Latest </Link>
                    </li>
                </ul>
                <button onClick={triggerSidebar} className="w-64 h-64 bg-green-500 sm:hidden"/>
            </nav>
        </>
    );
}
