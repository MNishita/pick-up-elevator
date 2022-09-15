import React from "react";
import "./orders.css";
import Image from "../../assets/image.svg";
import Tick from "../../assets/tick.svg";
import { useNavigate,useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from '../../services/getOrders/index';

function Order() {

    let navigate = useNavigate();
    const {customerId} =useParams();

    const {isLoading, data, isError, error } = useQuery(['orders'], async()=>await getOrders({customerId}.customerId));
    console.log(data)

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if(!data) navigate("/error")

    return (
        <>
        <div className="container">
            <p className="head">Order Pickup</p>
            {data.map(order => {return <div key={order.id}>
                <section className="details">
                    <div className="EachItem">
                    {order.order_items.map(items => {return <div key={items.id}>
                        <div className="section-1">
                            <div >
                                <img src={Image} className="image" alt="" height={140} width={140}></img>
                            </div>
                            <div className="left">
                                <span>{items.item_description}</span>
                                <br></br>
                                <span>Quantity : {items.item_quantity}</span>
                                <br></br>
                                <span>Price : ${items.item_price}</span>
                            </div>
                        </div>
                    </div>
                    })}
                    </div>
                        <div className="right">
                            <div className="status">
                                <span>Status :
                                    <span style={{ color: "#F69C49" }}> {order.order_status}</span>
                                </span>
                            </div>
                            <br></br>
                            <div className="payment">
                                <span>Payment Type : Card</span>
                                <span>{order.payment_status}
                                    <img style={{ paddingLeft: 15 }} src={Tick} height={17} alt="" disabled={order.payment_status==='UNPAID'}></img>
                                </span>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className="text">
                                <span>Subtotal</span>
                                <span>${order.order_amount}</span>
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
                                <span>${order.order_amount+0.75}</span>
                            </div>
                        </div>
                    </section>
                    <br></br>
                <div className="Merror">
                    <h4>Please open in mobile to generate QR</h4>
                </div>
                <div>
                    <button className="button2" disabled={order.payment_status==='UNPAID'} onClick={() => {navigate(`/qr/order_id/${order.order_id}/customer_id/${order.customer_id}`)}}>
                        Generate Pickup code
                    </button>  
                </div>
            </div>
            })}
        </div>
        </>
    )
}
export default Order
