import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
