import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

type boolFunction = (a: boolean) => void;

export default function Sidebar(props: {
    className?: string;
    setIsOpen: boolFunction;
    isOpen: boolean;
}) {
    const handleOnClick = () => {
        alert("Hi!");
    };
    return (
        <>
            <div
                className={`fixed z-40 h-screen dark:bg-slate-700 transition-width flex  ${
                    props.isOpen ? "w-screen" : "w-0"
                }`}
            >
                
                <button
                    onClick={() => props.setIsOpen(false)}
                    className={`h-12 transition-opacity ml-auto mx-6 mt-2`}
                >
                    <XIcon className={`w-12 ${props.isOpen ? "opacity-100" : "opacity-0" }`}/>
                    </button>
            </div>
        </>
    );
}
