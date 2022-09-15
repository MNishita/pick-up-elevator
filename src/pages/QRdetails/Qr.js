import React from "react";
import './Qr.css';
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate,useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getQr } from '../../services/getQr';
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { updateDelivery } from "../../services/postDelivery";

  function QRgererator() {

   // const { mutate} = useMutation(updateDelivery);

    var showdate = new Date();
    var displaydate =showdate.getFullYear() +'-'+showdate.getMonth()+'-'+showdate.getDate()+'T'+showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds()+'+05:30';
    
    let navigate = useNavigate();
    let url= '';
    const {orderId,customerId} =useParams();

     const {isLoading, data, isError, error,isFetched } = useQuery(['delivery'], async()=>await getQr({orderId}.orderId,{customerId}.customerId)); 
    
    if(isFetched) {
      url = data.data.image_code;
    }

    const qrcode = (
      <QRCodeCanvas
        value={url}
        size={200}
        bgColor={"white"}
      />
    );

    function dataPost(){
      axios.post(`http://localhost:8080/aggregator_api/v1/confirm_delivery/order_id/${orderId}/customer_id/${customerId}`,{
        id : data.data.id,
        customer_id : data.data.customer_id,
        store_id : data.data.store_id,
        order_id : data.data.order_id,
        image_id : data.data.image_id,
        image_code : data.data.image_code,
        payment_status : data.data.payment_status,
        delivery_status : "DELIVERED",
        pickup_date : displaydate
      })
      .then((response)=>{});
    }

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if(!data) navigate("/error")

    return (
      <>
      <div className="container">
      <h2>Scan the QR Code at pickup store</h2>
        <p>{qrcode}</p>
        <br></br>
        <h3>Click to confirm delivery</h3>
        <button className="button3" onClick={dataPost}
        // {() =>{
        //   mutate({
        //     id : data.data.id,
        //     customer_id : data.data.customer_id,
        //     store_id : data.data.store_id,
        //     order_id : data.data.order_id,
        //     image_id : data.data.image_id,
        //     image_code : data.data.image_code,
        //     payment_status : data.data.payment_status,
        //     delivery_status : "DELIVERED",
        //     pickup_date : displaydate
            
        //   })
        // }}
        >
          Confirm Delivery
        </button>
      </div>
      </>
    );
}
  
export default QRgererator;