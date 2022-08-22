import './App.css';
import Header from './components/header';
import Footer from './components/bottombar';
import Homepage from './pages/main/homepage';
import Order from './pages/order/order-details';
import IndividualOrder from './pages/IndividualOrder/individual_order'

import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';
import PageNotFound from './pages/pageNotFound';

function App() {
  
  return (
    <div className="App">
        
        <Header /> 
        <Router>
       
         <div className="container">
          <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            <Route path='/order' element={<Order />}></Route>
            <Route path='/order/123' element={<IndividualOrder />}></Route>
            <Route path='/order/:id' element={<PageNotFound />}></Route>
        
          </Routes>
        </div>
      </Router>  
      <Footer/>
    </div>
  );
}

export default App;
