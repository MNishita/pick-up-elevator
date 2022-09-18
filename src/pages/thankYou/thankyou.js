import React from "react";
import './thankyou.css';
import MyImage from "../../assets/Heart-Target.svg";
import Target from "../../assets/TargetLogo.svg";
import { useNavigate,useParams } from "react-router-dom";
function ThankYou(){
    const navigate= useNavigate()
   return(
    <div>
        <img src={Target} alt="" height={150} weight={150}/>
        <h3>Your comfort is our priority</h3>
        <h3>We hope you enjoyed shopping with Target</h3>
        <h2>Thank You Visit Again</h2>
        <button className='button1' onClick={()=>navigate("/homepage")}>Home Page</button>
        <h4>click the  button to return to home screen</h4>
    </div>
   ) 

}
export default ThankYou