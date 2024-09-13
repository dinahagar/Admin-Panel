import React from 'react';
import Home from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import { Layout } from 'antd';
import Sidebar from './Pages/Home/componenets/Sidebar';
import Header from './Pages/Home/componenets/Header';
import Login from './Pages/Login/Login';
import Categories from './Pages/Categories/Categories';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';

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
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:category" element={<CategoryProducts />} />
            </Routes>
        </Layout>
      </Layout>
    </Router>
    </>
  );
};

export default App;
