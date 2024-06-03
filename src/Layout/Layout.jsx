import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

function Layout() {
    return (
        <>
            <div className="container mx-auto">
                <Navbar />
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
