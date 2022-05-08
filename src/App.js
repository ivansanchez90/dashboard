import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavbarNav from "./components/NavbarNav";
import Sidebar from "./components/Sidebar";
import "./App.scss";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProductsId from "./pages/ProductsId";


function App() {
  return (
    <Router>

      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductsId />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
