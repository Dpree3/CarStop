import NavBar from "../Widgets/NavBar";
import { Outlet } from "react-router-dom"

export default function RootLayout() {
    return (  
        <div className="rootlayout">
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
}
 
