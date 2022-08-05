import React from "react";
import "./homepage.css";
import MyImage from "../../assets/Heart-Target.svg";

function Homepage() {
    return(
        <div className="main-container">
            <div>
                <img className="logo" src={MyImage} alt="Heart" height={150} width={150}></img>
                <div className="content">
                <h2>Service with Heart</h2>
                <p>Make it easy for guests to fell welcomed, inspired and rewarded</p>
                </div>
            </div>
            <div>
                <form>
                <div className="form-group">
                    <label>
                        <select className="choose">
                            <option value="email">email</option>
                            <option value="phone">phone no</option>
                            <option selected value="user_id">user id</option>
                            <option value="order_id">order id</option>
                        </select>
                    </label>
                    <input type="text" name="text" className="form-text"/>
                </div>
                <input className="button" type="submit" value="Search"/>
                </form>
            </div>
        </div>
    )
}
export default Homepage