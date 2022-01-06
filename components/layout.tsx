import { ReactElement } from "react";
import Navbar from "./navbar";

export default function Layout(children:ReactElement){
    return(
        <>
        <Navbar/>
        <main className="pt-16 dark:bg-slate-700 dark:text-white"> {children} </main>
        </>
    )
}