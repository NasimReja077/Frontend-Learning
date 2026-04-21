import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppSidebar from "./components/AppSidebar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <AppSidebar />

        <div style={{ padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="/charts" element={<h1>Charts</h1>} />
            <Route path="/reports" element={<h1>Reports</h1>} />
            <Route path="/ecommerce" element={<h1>E-commerce</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;