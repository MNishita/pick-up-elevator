import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import Header from './components/header';
import Footer from './components/bottombar';
import Homepage from './pages/main/homepage';
import Order from './pages/orders/orders';
import PageNotFound from './components/error/404Error';
import QRgererator from './pages/QRdetails/Qr';

import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Homepage  />} />
            <Route path='/homepage' element={<Homepage />} />
            {/* <Route path='/order' element={<Order />} /> */}
            <Route path='/order/:orderId' element={<Order />} />
            <Route path='/qr/order_id/:orderId/customer_id/:customerId' element={<QRgererator />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
    </QueryClientProvider>
  );
}

export default App;
