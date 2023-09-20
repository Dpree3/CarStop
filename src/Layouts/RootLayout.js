import NavBar from "../Widgets/NavBar";
import { Outlet } from "react-router-dom"

export default function RootLayout() {
    return (  
        <div>
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
}
 
