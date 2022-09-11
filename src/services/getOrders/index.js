import axios from 'axios'

export const getOrders = async(customer_id) => {
    const response =await axios.get(`http://localhost:8080/aggregator_api/v1/get_orders/customer_id/${customer_id}`);
    return response?.data;
}