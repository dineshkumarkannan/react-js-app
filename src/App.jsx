import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navigation/Navigation";
import { ThemeProvider } from "./context/ThemeContext";
import ReactHooks from "./pages/ReactHooks";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hooks" element={<ReactHooks />} />
            </Routes>
          </main>
          <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400 shadow-lg flex items-center justify-center h-18">
            React Learning App
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
