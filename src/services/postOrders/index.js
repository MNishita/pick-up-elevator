import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const baseURL='https://jsonplaceholder.typicode.com/todos/';

export default function AddOrder() {

    const [customer_id, setCustomerId] = useState('');
    const [order_id, setOrderId] = useState('');
    const [store_id, setStoreId] = useState('');
    const [phone, setPhone] = useState('');
    const Navigate = useNavigate();
    const { id } = useParams();
    

    const UpdateOrder = (e) => {
        e.preventDefault();

        const order = { customer_id, order_id, store_id, phone }

            // axios.post(baseURL,order).then((response) => {
            //     console.log("updated")
            // }).catch(error => {
            //     console.log(error)
            // })

            console.log("updated")

       
    }

    useEffect(() => {

        axios.get(baseURL+'/'+id).then((response) => {
            setCustomerId(response.data.customer_id)
            setOrderId(response.data.order_id)
            setStoreId(response.data.store_id)
            setPhone(response.data.phone)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
       
            <div>         
                <form>
                    
                    <div class="customerid">
                        <label > Customer Id :</label>
                        <input
                            type="text"
                            placeholder="Enter customer id"
                            name="customer_id"
                            className="form-text"
                            value={customer_id}
                            onChange={(e) => setCustomerId(e.target.value)}
                        >
                        </input>
                    </div>

                    <div class="orderid">
                        <label > Order Id :</label>
                        <input
                            type="text"
                            placeholder="Enter order id"
                            name="order_id"
                            className="form-text"
                            value={order_id}
                            onChange={(e) => setOrderId(e.target.value)}
                        >
                        </input>
                    </div>

                    <div class="storeid">
                        <label > Store Id :</label>
                        <input
                            type="text"
                            placeholder="Enter store id"
                            name="store_id"
                            className="form-text"
                            value={store_id}
                            onChange={(e) => setStoreId(e.target.value)}
                        >
                        </input>
                    </div>

                    <div class="phone">
                        <label > Phone :</label>
                        <input
                            type="text"
                            placeholder="Enter phone"
                            name="phone"
                            className="form-text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        >
                        </input>
                    </div>
                
                    <span>
                        <button  onClick={(e) => UpdateOrder(e)} >Submit </button>
                        <button onClick={()=>{Navigate('/orders/123')}}>cancel</button>
                    </span>
                    
                </form>
                </div>
        
    )
}
