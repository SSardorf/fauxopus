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
                className={`fixed z-40 h-screen bg-slate-800 transition-width flex flex-row ${
                    props.isOpen ? "w-screen" : "w-0"
                }`}
            >
                
                <button
                    onClick={() => props.setIsOpen(false)}
                    className={`w-16 h-16 bg-gray-500 transition-opacity duration-700 ${props.isOpen ? "opacity-100" : "opacity-0"}`}
                />
            </div>
        </>
    );
}
