import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
}

export default App;
