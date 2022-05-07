import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import NavbarNav from "./components/NavbarNav";
import Sidebar from "./components/Sidebar";
import "./App.scss";
import Home from "./pages/Home";
import Sales from "./pages/Products";
import Clients from "./pages/Users";


function App() {
  return (
    <Router>

      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
