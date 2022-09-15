import React from "react";
import "./homepage.css";
import MyImage from "../../assets/Heart-Target.svg";
import { useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { useQuery } from "@tanstack/react-query";
import { getOrders } from '../../services/getOrders/index'
import { valid } from "../../helpers/homePage";

function Homepage() {

    let navigate = useNavigate();
    const [id,setId] = useState({customerId:''});
    const [error,setError] = useState("");

    // const {data,refetch}=useQuery(['orders'], async()=>await getOrders(id.customerId),
    // {
    //     enabled:false,
    // });
    
    // const submitHandler = e =>{
    //    e.preventDefault(); 
    //    refetch();
    //    const isValid = valid(data.length)
    //    if(isValid){
    //     console.log(isValid)
    //     navigate(`/order/${id.customerId}`)  
    //    }
    //    else{

    //     console.log(isValid)
    //     setError("Invalid Customer ID");
    // }
    // }

    const submitHandler = e =>{
        getOrders(id.customerId).then((response) =>{
            const isValid = valid(response.length)
            if(isValid){
                console.log(isValid)
                navigate(`/order/${id.customerId}`)  
            }
            else{
                console.log(isValid)
                setError("Invalid Customer ID");
            }
        }).catch(error =>{console.log(error)})
    }

    return(
        <div className="main-container">
            <div>
                <img className="logo" src={MyImage} alt="Heart" height={400} width={450}></img>
            </div>
            <div>
                <div className="form-group">
                    <label>
                        <select className="choose">
                            <option value="customerId">customer id</option>
                            {/* <option value="email">email</option>
                                <option value="phone">phone no</option> */}
                        </select>
                    </label>
                    <input type="text" name="customerId" value={id.customerId} className="form-text" onChange={(e)=> setId({customerId:e.target.value})}/>
                </div>
                {(error !== "") ? <div className="error">{error}</div> : ""}
                <button type="submit" className="button1" disabled={!id.customerId} onClick={submitHandler}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Homepage
