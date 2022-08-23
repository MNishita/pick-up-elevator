import './App.css';
import Header from './components/header';
import Footer from './components/bottombar';
import Homepage from './pages/main/homepage';
import Order from './pages/orders/orders';
import OrderDetails from  './pages/orderdetails/order-details';
import Error from './pages/error/404Error';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path='/' element={<Homepage/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/orders/:orderId' element={<OrderDetails/>}/>
          <Route path='/orders/404' element={<Error/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
