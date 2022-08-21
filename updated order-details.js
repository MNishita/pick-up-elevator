import React from "react";
import "./order-details.css";
import Image from "../../assets/image.svg";
import Tick from "../../assets/tick.svg";
import Qr from "../../assets/qrcode.svg";
import {useState,useEffect} from 'react';
import OrderService from "../../services/service.js"



function Order() {
    const [data,setData]= useState(true);

    

    useEffect(() => {
        OrderService.getOrderDetails().then((res)=>{
            setData(res.data)
        })
    },[])
    return(
    <div>
     <p className="head" >Order Pickup</p>
    <div className="container">
        
        {data.map((order) =>{  return <div key={order.id}>
            <section className="details">
                <div className="section-1">
                    <div className="image">
                        <img src={Image} alt={order.name} height={140} width={140}></img>
                    </div>
                    <div className="left">
                        <span>{order.name}</span><br></br>
                        <span>{order.quantity}</span><br></br>
                        <span>{order.payment_type}</span>
                    </div>
                    <div className="right">
                        <span>Status : 
                            <span style={{color:"#F69C49"}}> {order.order_status}</span>
                        </span>
                        <span className="payment">
                            {order.payment_status} 
                            <img style={{paddingLeft:15}} src={Tick} height={17} ></img>
                        </span>
                    </div>
                </div>
                <div class="section-2">
                    <div className="text">
                    <span>Subtotal</span>
                    <span>{order.total}</span>
                    </div>
                    <div className="text">
                    <span>Delivery</span>
                    <span>{order.delivery}</span>
                    </div>
                    <div className="text">
                    <span>Estimated tax</span>
                    <span>{order.tax}</span>
                    </div>
                    <div className="text" id="bottom">
                    <span>Total</span>
                    <span>{order.total}</span>
                    </div>
                </div><br></br><br></br>
            </section>
            </div>
        })}


        <div>
            <button class="button">
                <span className="button-text">Ready to Pick</span>
                <img className="qr" src={Qr}></img>
            </button>
        </div>
    </div>
    </div>
    )
}
export default Order
