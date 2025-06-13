import React from "react";

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
  const { t } = useTranslation();
  return (
    <div className="page">
      <h2>{t("market.title")}</h2>
      {/* ... */}
    </div>
  );
}

function Profile() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <h2>{t("nav.me")}</h2>
      {/* ... */}
    </div>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <nav className="navbar">
  <div className="nav-item">
    <Link to="/">{t("nav.home")}</Link>
  </div>
  <div className="nav-item">
    <Link to="/market">{t("nav.market")}</Link>
  </div>
  <div className="nav-item">
    <Link to="/profile">{t("nav.me")}</Link>
  </div>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
