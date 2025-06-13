// Mercado DApp - Khung chợ online trao đổi hàng hóa cho Pi Network
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Bienvenido a Mercado</h1>
      <p>Nơi giao dịch hàng hóa phi tâp trung trong hệ sinh thái Pi.</p>
      <Link to="/market" className="btn">Khám phá gian hàng</Link>
    </div>
  );
}

function Market() {
  return (
    <div className="page">
      <h2>Danh sách sản phẩm</h2>
      <div className="product-list">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product" />
          <p>Tháp xả hương</p>
          <p>Giá: 5 Pi</p>
          <button>Mua ngay</button>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product" />
          <p>Cà phê rang xay</p>
          <p>Giá: 2 Pi</p>
          <button>Mua ngay</button>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="page">
      <h2>Thông tin cá nhân</h2>
      <p>Username: @username</p>
      <p>Ví Pi: GDZK...YFZ</p>
      <p>Ngôn ngữ: Tiếng Việt</p>
    </div>
  );
}

function App() {
  const [language] = useState("vi");

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Trang chủ</Link>
          <Link to="/market">Chợ</Link>
          <Link to="/profile">Tôi</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
