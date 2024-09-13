import React from 'react';
import Home from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import { Layout } from 'antd';
import Sidebar from './Pages/Home/componenets/Sidebar';
import Header from './Pages/Home/componenets/Header';
import Login from './Pages/Login/Login';

export interface AppProps {
  setLocale: (locale: 'en' | 'ar') => void;
}

const App: React.FC<AppProps> = () => {

  return (
    <>
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header/>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
        </Layout>
      </Layout>
    </Router>
    </>
  );
};

export default App;
