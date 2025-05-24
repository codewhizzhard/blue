import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div><Navbar /></div>
            
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;