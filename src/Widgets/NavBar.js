import { NavLink} from "react-router-dom"
const NavBar = () => {
    return (  
        <div className="navbar">
             <ul>
                <li><a>CarStop</a></li>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
            </ul>
        </div>
    );
}
 
export default NavBar;
