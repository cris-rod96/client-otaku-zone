import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
