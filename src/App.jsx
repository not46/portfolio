import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/home/Navbar';
import ContactForm from './components/ContactForm';
import Work from './components/Work';
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  // Set the theme to dark mode directly
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="mb-10">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
