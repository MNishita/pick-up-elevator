import React from "react";
import "./homepage.css";
import MyImage from "../../assets/Heart-Target.svg";
import { useNavigate} from 'react-router-dom';
import {useState} from 'react'
import { useQuery } from "@tanstack/react-query";
import { getOrders } from '../../services/getOrders/index'
import { valid } from "../../helpers/homePage";
function Homepage() {
    const [id,setId] = useState({customerId:""});
    const [error,setError] = useState("");

    const { isLoading, data } = useQuery(['orders'], async()=>await getOrders(id));
    const submitHandler = e =>{
       e.preventDefault(); 
       console.log(data)
       const isValid = valid(data)

       if(isValid){
        console.log(isValid)
        //navigate(`order/${id}`)  
       }
       else{
        console.log(isValid)
        //setError("Invalid Customer ID");

       }
    }


    const params={ id}
    let navigate = useNavigate();
   
    return(
        <div className="main-container">
            <div>
                <img className="logo" src={MyImage} alt="Heart" height={450} width={550}></img>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>
                            <select className="choose">
                                <option value="customerId">Customer ID</option>
                                 <option value="email">email</option>
                                <option value="phone">phone no</option>
                                <option value="userId">user id</option> 
                                
                            </select>
                        </label>
                        <input type="text" name="customerId" value={id.customerId} className="form-text" onChange={(e)=> setId(e.target.value)}/>
                    </div>
                    {(error != "") ? <div className="error">{error}</div> : ""}
                    <span>
                        <button className="button1" ><span className="button-text">search</span>  </button>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Homepage
