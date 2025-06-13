// Mercado DApp - Khung chợ online trao đổi hàng hóa cho Pi Network
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <LanguageSelector />
      <h1>{t("home.welcome")}</h1>
      <p>{t("home.desc")}</p>
      <Link to="/market" className="btn">{t("market.buy")}</Link>
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
