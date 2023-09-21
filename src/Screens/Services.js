import { NavLink} from "react-router-dom"
import ServiceOption from "../Widgets/ServiceOption";
import wheelIcon from '../Images/truck-wheel (2).png';
import gasIcon from '../Images/gas-station.png';
import chargeIcon from '../Images/extension-cable.png';


const Services = () => {
    return (  
        <div className='services'>
            <div>
                <ul>
                    <li><NavLink to="gas"><ServiceOption option="Jump Off" img={chargeIcon}></ServiceOption></NavLink></li>
                    <li><NavLink to="tire"><ServiceOption option="Gas" img={gasIcon} ></ServiceOption></NavLink></li>
                    <li><NavLink to="tire"><ServiceOption option="Tire" img={wheelIcon} ></ServiceOption></NavLink></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Services;