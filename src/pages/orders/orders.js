import React from "react";
import "./orders.css";
import Image from "../../assets/image.svg";
import Tick from "../../assets/tick.svg";
import Qr from "../../assets/qrcode.svg";

function Order() {
    return(
    <div className="container">
        <p className="head">Order Pickup</p>
        <section className="details">
            <div className="section-1">
                <div className="image">
                    <img src={Image} alt="Tricycle" height={140} width={140}></img>
                </div>
                <div className="left">
                    <span>Atlas - Tricycle VXU5</span><br></br>
                    <span>Qty : 1</span><br></br>
                    <span>Payment Type : Card</span>
                </div>
                <div className="right">
                    <span>Status : 
                        <span style={{color:"#F69C49"}}> In Transit</span>
                    </span>
                    <span className="payment">
                        Payment Done 
                        <img style={{paddingLeft:15}} src={Tick} height={17} ></img>
                    </span>
                </div>
            </div>
            <div class="section-2">
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
            <button>
                <span className="button-text">Ready to Pick</span>
                <img className="qr" src={Qr} height={30} width={30}></img>
            </button>
        </div>
    </div>
    )
}
export default Order