import React from "react";
import "./homepage.css";
import MyImage from "../../assets/Heart-Target.svg";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

function Homepage() {
    const [id,setId] = useState('');
    let navigate = useNavigate();
     
    return(
        <div className="main-container">
            <div>
                <img className="logo" src={MyImage} alt="Heart" height={450} width={450}></img>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label>
                            <select className="choose">
                                {/* <option value="email">email</option>
                                <option value="phone">phone no</option>
                                <option selected value="user_id">user id</option> */}
                                <option value="customer_id">customer id</option>
                            </select>
                        </label>
                        <input type="text" name="text" value={id} className="form-text" onChange={(e)=> setId(e.target.value)}/>
                    </div>
                    <span>
                        <button  type='submit' disabled={!id} onClick={()=>{                       
                            if(parseInt(Number(id))==id && !isNaN(parseInt(id,10)))
                                 navigate("/order")
                        }}>
                        
                            Search
                        </button>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Homepage
