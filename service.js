import axios from "axios";

const BaseURL="localhost:4000/items";

class OrderService{
     getOrderDetails(){
        return axios.get(BaseURL);
    }
}

export default new OrderService;
