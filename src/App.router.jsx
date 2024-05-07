import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import { HomeDashboard } from "./pages/dashboard/pages";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<HomeDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
