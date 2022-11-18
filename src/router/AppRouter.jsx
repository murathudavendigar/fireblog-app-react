import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthContext from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import LoginFormik from "../pages/LoginFormik";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Dashboard />} />
          <Route path="/loginformik" index element={<LoginFormik />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newblog" element={<PrivateRouter />}>
            <Route path="" element={<NewBlog />} />
          </Route>
          <Route path="/details" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
          <Route path="/updateblog" element={<PrivateRouter />}>
            <Route path="" element={<UpdateBlog />} />
          </Route>
          <Route path="/profile" element={<PrivateRouter />}>
            <Route path="" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
};

export default AppRouter;
