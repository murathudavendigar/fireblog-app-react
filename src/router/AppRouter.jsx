import { BrowserRouter, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Router path="/" elements={<Dashboard />} />
        <Router path="/login" elements={<Login />} />
        <Router path="/register" elements={<Register />} />
        <Router path="/details" elements={<PrivateRouter />}>
          <Router path="" elements={<Details />} />
        </Router>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
