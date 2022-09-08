import React, { useState } from "react";
import "./orders.css";
import Image from "../../assets/image.svg";
import Tick from "../../assets/tick.svg";
import Qr from "../../assets/qrcode.svg";
import { useNavigate,useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from '../../services/getOrders/index'
import {useLocation} from "react-router-dom";

function Order() {
    let navigate = useNavigate();
    const location = useLocation();
    const {orderId} =useParams();

    // const params = new URLSearchParams(window.location.pathname)
    const { isLoading, data, isError, error } = useQuery(['orders'], async()=>await getOrders({orderId}.orderId));
   
    console.log(parseInt({orderId}.orderId))
    console.log("debug", isLoading)
    console.log("data",data)
    console.log(!data)
    console.log(error, isError)

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if(!data) navigate("/error")

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
                                        <img src={Image} alt="" height={140} width={140}></img>
                                    </div>
                                    <div className="left">
                                        <span>{order.order_items.item_description}</span><br></br>
                                        <span>{order.order_items.item_quantity}</span><br></br>
                                        <span>Payment Type : Card</span>
                                    </div>
                                    <div className="right">
                                        <span>Status :
                                            <span style={{ color: "#F69C49" }}> {order.order_status}</span>
                                        </span>
                                        <span className="payment">
                                            {order.payment_status}
                                            <img style={{ paddingLeft: 15 }} src={Tick} height={17} ></img>
                                        </span>
                                    </div>
                                </div>

                                <div className="section-2">
                                    <div className="text">
                                        <span>Subtotal</span>
                                        <span>{order.order_amount}</span>
                                    </div>
                                    <div className="text">
                                        <span>Delivery</span>
                                        <span>{order.order_items.item_price}</span>
                                    </div>
                                    <div className="text">
                                        <span>Estimated tax</span>
                                        <span>$0.75</span>
                                    </div>
                                    <div className="text" id="bottom">
                                        <span>Total</span>
                                        <span>{order.order_amount}</span>
                                    </div>
                                </div>
                            </section>

                            <div>
                                    <button class="tooltip" disabled={order.payment_status==='UNPAID'} onClick={() =>{
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
