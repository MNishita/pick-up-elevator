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

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if(!data) navigate("/error")

    return (
        <>
        <div className="container">
            <p className="head">Order Pickup</p>
            {data.map(order => {return <div key={order.id}>
                {order.order_items.map(items => {return <div key={items.id}>
                    <section className="details">
                        <div className="section-1">
                            <div className="title">
                                <div className="image">
                                    <img src={Image} alt="" height={140} width={140}></img>
                                </div>
                                <div className="left">
                                    <span>{items.item_description}</span>
                                    <br></br>
                                    <span>Quantity : {items.item_quantity}</span>
                                    <br></br>
                                    <span>Payment Type : Card</span>
                                </div>
                            </div>
                            <div className="right">
                                <span className="status">Status :
                                    <span style={{ color: "#F69C49" }}> {order.order_status}</span>
                                </span>
                                <span className="payment">{order.payment_status}
                                    <img style={{ paddingLeft: 15 }} src={Tick} height={17} alt="" disabled={order.payment_status==='UNPAID'}></img>
                                </span>
                            </div>
                        </div>
                        <div className="section-2">
                            <div className="text">
                                <span>Subtotal</span>
                                <span>{items.item_price}</span>
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
                    <br></br>
                </div>
                })}
                <div className="Merror">
                    <h4>Please open in mobile to generate QR</h4>
                </div>
                <div>
                    <button className="button2" disabled={order.payment_status==='UNPAID'} onClick={() => {navigate(`/qr/${order.order_id}/${order.customer_id}`)}}>
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
