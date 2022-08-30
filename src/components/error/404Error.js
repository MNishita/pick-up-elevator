import React from "react";
import "./404Error.css";
import {useNavigate} from 'react-router-dom';

function Error() {

    let navigate = useNavigate();

    return(
        <div>
            <div className="sorry">
                <h1>SORRY</h1>
            </div>
            <div className="not-found">
                <h2>we couldn't find that page</h2>
            </div>
            <button onClick={()=>{navigate("/homepage")}}>Go to Homepage</button>
        </div>
    )
}
export default Error

