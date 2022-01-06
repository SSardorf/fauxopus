import Link from "next/link";

export default function Button() {
    const handleOnClick = () => {
        alert("Hi!");
    };
    return (
            <button onClick={handleOnClick} className="w-64 h-64 bg-green-500">
                Testing
            </button>
    );
    }