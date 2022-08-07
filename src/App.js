import './App.css';
import Header from './components/header';
import Footer from './components/bottombar';
import Homepage from './pages/main/homepage';
import Order from './pages/order/order-details';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/orderdetails' element={<Order/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
