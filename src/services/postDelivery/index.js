import axios from 'axios'

export const updateDelivery = async({order_id,customer_id,...updatedDelivery}) => {
    axios.post(`http://localhost:8080/aggregator_api/v1/confirm_delivery/order_id/${order_id}/customer_id/${customer_id}`,updatedDelivery).then((res)=>res.data);
}