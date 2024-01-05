import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./views/home";
import Features from './views/features';
import Page from './views/page';
import Shop from './views/shop';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/page" element={<Page />} />
          <Route path="/shop" element={<Shop />} />

          {/*  */}
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
