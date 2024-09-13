import React from 'react';
import Home from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export interface AppProps {
  setLocale: (locale: 'en' | 'ar') => void;
}

const App: React.FC<AppProps> = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
