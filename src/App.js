import './App.css';
import Header from './components/header';
import Footer from './components/bottombar';
import Content from './pages/main/content';
import Order from './pages/order/order-details';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
