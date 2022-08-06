import './App.css';
import Header from './components/header';
import Footer from './components/bottombar';
import Homepage from './pages/main/homepage';
import Order from './pages/order/order-details';

function App() {
  return (
    <div className="App">
      <Header/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default App;
