import axios from 'axios'


export const getOrders = () => {

    return axios.get('https://jsonplaceholder.typicode.com/todos/')
}