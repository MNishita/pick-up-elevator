import axios from 'axios'

export const getQr = async(order_id,customer_id) => {
    const response =await axios.get(`http://localhost:8080/aggregator_api/v1/generate_qr/order_id/${order_id}/customer_id/${customer_id}`);
    return response;
}