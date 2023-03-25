import { Outlet } from "react-router-dom"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
export default function Home(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}