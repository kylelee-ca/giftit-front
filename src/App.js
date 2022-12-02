import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Registry from "./pages/Registry";
import Shop from "./pages/Shop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
