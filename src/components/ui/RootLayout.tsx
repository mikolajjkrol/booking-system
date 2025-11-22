import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function RootLayout(){
    return (    
    <div className="app dark">
        <Navbar />
        <div className="container">
            <Sidebar />     
            <Outlet />
        </div>
    </div>
    )
}