import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./views/home";
import Header from "./component/header/header";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*  */}
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
