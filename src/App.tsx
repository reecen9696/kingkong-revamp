import React from "react";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import AppBlocker from "./components/appblocker"; // Import the AppBlocker

function App() {
  return (
    <>
      {/* AppBlocker will handle blocking on smaller screens */}
      <AppBlocker />

      {/* Main app content */}
      <div className="hidden lg:block">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
