
const ServiceOption = (props) => {
    return (  
        <div className="serviceOption">
            <img style={{width:'50px', height:'50px'}} src={props.img} alt='Icon'></img>
            <a>{props.option}</a>

        </div>
    );
}
 
export default ServiceOption;