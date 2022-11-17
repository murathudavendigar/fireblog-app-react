import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthContext from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/details" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
};

export default AppRouter;
