import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      <p>...</p>
    </div>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <nav className="navbar">
  <Link to="/">{t("nav.home")}</Link>
  <Link to="/market">{t("nav.market")}</Link>
  <Link to="/profile">{t("nav.me")}</Link>
</nav>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        {/* Nếu có trang Profile thì thêm ở đây */}
      </Routes>
    </Router>
  );
}

export default App;
