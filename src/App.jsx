import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import { Route, Routes } from "react-router-dom";
import PasswordReset from "./components/PasswordReset";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";

function App() {
  axios.defaults.baseURL = "http://localhost:3001/api";
  return (
    <>
      {" "}
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgot />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
