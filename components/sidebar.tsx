import Link from "next/link";

type boolFunction = (a: boolean) => void;

export default function Sidebar(props: {
    className?: string;
    setIsOpen: boolFunction;
}) {
    const handleOnClick = () => {
        alert("Hi!");
    };
    return (
        <>
            <div
                className={`${props.className} flex flex-row justify-between h-screen gap-6 bg-white/30 backdrop-blur-sm`}
            >
                <div className="flex flex-col gap-8 mt-20">
                    <h1 className="ml-4 text-4xl">Home</h1>
                    <h1 className="ml-4 text-4xl">Blog</h1>
                    <h1 className="pl-6 ml-4 text-3xl">Latest</h1>
                    <h1 className="pl-6 ml-4 text-3xl">Coding</h1>
                    <h1 className="pl-6 ml-4 text-3xl">Investing</h1>
                    <h1 className="pl-6 ml-4 text-3xl">Data Science/ML</h1>
                </div>
                <button
                    onClick={() => props.setIsOpen(false)}
                    className="w-16 h-16 bg-gray-500"
                />
            </div>
        </>
    );
}
