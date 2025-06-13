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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* ✅ BOTTOM NAVIGATION */}
      <div className="bottom-nav">
        <Link to="/" className="bottom-nav-item">{t("nav.home")}</Link>
        <Link to="/market" className="bottom-nav-item">{t("nav.market")}</Link>
        <Link to="/profile" className="bottom-nav-item">{t("nav.me")}</Link>
      </div>
    </Router>
  );
}

export default App;
