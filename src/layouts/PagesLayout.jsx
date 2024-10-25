
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const PagesLayout = () => {
    return (
        <div className="page">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default PagesLayout