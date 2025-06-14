import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.scss";

const AppContent = () => {
  const { isDarkmode } = useTheme();
  
  return (
    <div className={`App ${isDarkmode ? 'dark' : ''}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
