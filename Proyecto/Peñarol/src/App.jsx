import "./App.css";
import Sidebar from "./Components/Siderbar/sidebar";
import UserInfo from "./Components/UserInfo/userInfo"
import DarkModeToggle from "./Components/DarkModeToggle/darkModeToggle";
import Home from "./Pages/home";
import Reviews from "./Pages/reviews";
import NewReleases from "./Pages/newReleases";
import Popular from "./Pages/popular";
import { useState } from "react";
import { ThemeContext } from "./Context/themeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [themeSettings, setThemeSettings] = useState({
    mode: "light",
    switchMode: () => {
      setThemeSettings((prevState) => ({
        ...prevState,
        mode: prevState.mode === "light" ? "dark" : "light",
      }));
    },
  });

  return (
    <ThemeContext.Provider value={themeSettings}>
      <div className={"App-" + themeSettings.mode}>
        <Router>
          <header className="header">
            <section>
              <div className="header-left">
                <DarkModeToggle />
              </div>
             </section> 
             <UserInfo />
          </header>
          <div className="content">
            <Sidebar />
            <main>
              <section className="treding">
                <h2>New and trending</h2>
                <p>Based on player count and release date</p>
              <Routes>
                <Route pathname="/" element={<Home />} />
                <Route pathname="/reviews" element={<Reviews />} />
                <Route pathname="/newreleases" element={<NewReleases />} />
                <Route pathname="/popular" element={<Popular />} />
              </Routes>
              </section>
            </main>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}
