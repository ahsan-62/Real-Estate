import { Outlet } from "react-router-dom";
import Navbar from "../Layouts/Navbar/Navbar";


const Roots = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;