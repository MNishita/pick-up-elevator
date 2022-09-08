import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/bottombar';
import Homepage from './pages/main/homepage';
import Order from './pages/orders/orders';
import PageNotFound from './pages/404';
import QRgererator from './pages/QRdetails/Qr';
import AddOrder from './services/postOrders'

import { QueryClientProvider, QueryClient ,useMutation,useQueryClient,
  useQuery} from '@tanstack/react-query'
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
            <Route path='/order' element={<Order />} />
            <Route path='/qr' element={<QRgererator />} />
            <Route path='/post' element={<AddOrder />}/>
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
