import React from "react";
import {useLocation, useParams} from "react-router-dom";

function OrderDetails() {
    const location = useLocation();
    const {orderId} =useParams();
    return(
        <div>
            <h2>
                Welcome {orderId}
            </h2>
        </div>
    )
}
export default OrderDetails