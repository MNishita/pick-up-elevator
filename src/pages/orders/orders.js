import React, { useState } from "react";
import "./orders.css";
import Image from "../../assets/image.svg";
import Tick from "../../assets/tick.svg";
import Qr from "../../assets/qrcode.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from '../../services/getOrders/index'

function Order() {
    let navigate = useNavigate();
    const { isLoading, data, isError, error } = useQuery(['orders'], getOrders)

    console.log("debug", isLoading)
    console.log(data)

    console.log(error, isError)

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    return (
        <>
            <div className="container">
                <p className="head">Order Pickup</p>
                {
                    data?.data.map(order => {
                        return <div key={order.id}>
                            <section className="details">
                                <div className="section-1">
                                    <div className="image">
                                        <img src={Image} alt="{order.title}" height={140} width={140}></img>
                                    </div>
                                    <div className="left">
                                        <span>{order.title}</span><br></br>
                                        <span>Qty : 1</span><br></br>
                                        <span>Payment Type : Card</span>
                                    </div>
                                    <div className="right">
                                        <span>Status :
                                            <span style={{ color: "#F69C49" }}> In Transit</span>
                                        </span>
                                        <span className="payment">
                                            {order.completed}
                                            <img style={{ paddingLeft: 15 }} src={Tick} height={17} ></img>
                                        </span>
                                    </div>
                                </div>

                                <div className="section-2">
                                    <div className="text">
                                        <span>Subtotal</span>
                                        <span>$54.90</span>
                                    </div>
                                    <div className="text">
                                        <span>Delivery</span>
                                        <span>$0.00</span>
                                    </div>
                                    <div className="text">
                                        <span>Estimated tax</span>
                                        <span>$0.75</span>
                                    </div>
                                    <div className="text" id="bottom">
                                        <span>Total</span>
                                        <span>$55.65</span>
                                    </div>
                                </div>
                            </section>

                            <div>
                                    <button class="tooltip" disabled={order.completed===false} onClick={() =>{
                                        navigate('/qr')
                                    }}>
                                        Generate Pickup code
                                    </button>
                                    {/* <span class="tooltiptext">payment not done</span> */}
                                    <img className="qr" src={Qr} height={30} width={30}></img>
                                
                            </div>
                        </div>
                    })
                    
                 }
           
                {/* <div>
                    <button>
                        <span className="button-text" disabled='true'>Generate Pickup code</span>
                        <img className="qr" src={Qr} height={30} width={30}></img>
                    </button>
                </div> */}
            </div>
        </>
    )
}
export default Order


// import React from "react";
// // import "./order-details.css";
// import Image from "../../assets/image.svg";
// import Tick from "../../assets/tick.svg";
// import Qr from "../../assets/qrcode.svg";
// import {useState,useEffect} from 'react';
// import OrderService from "../../services/service/index.js"



// function Order() {
//     const [data,setData]= useState(true);



//     useEffect(() => {
//         OrderService.getOrderDetails().then((res)=>{
//             setData(res.data)
//         })
//     },[])
//     return(
//     <div>
//      <p className="head" >Order Pickup</p>
//     <div className="container">

//         {data.map((order) =>{  return <div key={order.id}>
//             <section className="details">
//                 <div className="section-1">
//                     <div className="image">
//                         <img src={Image} alt={order.name} height={140} width={140}></img>
//                     </div>
//                     <div className="left">
//                         <span>{order.name}</span><br></br>
//                         <span>{order.quantity}</span><br></br>
//                         <span>{order.payment_type}</span>
//                     </div>
//                     <div className="right">
//                         <span>Status : 
//                             <span style={{color:"#F69C49"}}> {order.order_status}</span>
//                         </span>
//                         <span className="payment">
//                             {order.payment_status} 
//                             <img style={{paddingLeft:15}} src={Tick} height={17} ></img>
//                         </span>
//                     </div>
//                 </div>
//                 <div class="section-2">
//                     <div className="text">
//                     <span>Subtotal</span>
//                     <span>{order.total}</span>
//                     </div>
//                     <div className="text">
//                     <span>Delivery</span>
//                     <span>{order.delivery}</span>
//                     </div>
//                     <div className="text">
//                     <span>Estimated tax</span>
//                     <span>{order.tax}</span>
//                     </div>
//                     <div className="text" id="bottom">
//                     <span>Total</span>
//                     <span>{order.total}</span>
//                     </div>
//                 </div><br></br><br></br>
//             </section>
//             </div>
//         })}


//         <div>
//             <button class="button">
//                 <span className="button-text">Ready to Pick</span>
//                 <img className="qr" src={Qr}></img>
//             </button>
//         </div>
//     </div>
//     </div>
//     )
// }
// export default Order

