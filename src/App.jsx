import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Members from "./pages/Members";
import MemberProfile from "./pages/MemberProfile";
import Resources from "./pages/Resources";
import ApiPage from "./pages/ApiPage";
import Tree from "./pages/Tree";
import Bitacora from "./pages/Bitacora";
import AiUsage from "./pages/AiUsage";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Members />} />
          <Route path="/integrantes/:id" element={<MemberProfile />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/arbol" element={<Tree />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/ia" element={<AiUsage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </div>
  );
}