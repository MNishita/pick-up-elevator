import React from "react";
import {useLocation} from "react-router-dom";

function OrderDetails() {
    const location = useLocation();
    return(
        <div>
            <h2>
                Welcome {location.pathname}
            </h2>
        </div>
    )
}
export default OrderDetails