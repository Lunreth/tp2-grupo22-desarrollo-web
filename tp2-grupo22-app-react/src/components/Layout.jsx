import Sidebar from "./Sidebar";

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <div className="ambient ambient-one"></div>
        <div className="ambient ambient-two"></div>
        <div className="page-wrapper">{children}</div>
      </main>
    </div>
  );
}