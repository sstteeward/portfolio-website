import { useState } from "react";
import styles from "./App.module.css";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Hero } from "./sections/Hero/Hero";
import { Navbar } from "./sections/Navbar/Navbar";
import { Projects } from "./sections/Projects/Projects";
import { Login } from "./sections/Login/login"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLoginSuccess} />
            }
          />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <Hero />
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
