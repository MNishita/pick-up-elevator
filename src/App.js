import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/header';
import Footer from './components/bottombar';
import Homepage from './pages/main/homepage';
import Order from './pages/orders/orders';
import OrderDetails from './pages/orderdetails/order-details';
import PageNotFound from './pages/404';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/orders/:orderId' element={<OrderDetails />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
