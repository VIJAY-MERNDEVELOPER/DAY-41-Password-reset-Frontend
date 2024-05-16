/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleRegister = async (e, user) => {
    e.preventDefault();

    try {
      const res = await axios.post("/user/register", {
        ...user,
      });

      const { username, email, password } = user;
      if (!username || !email || !password) {
        toast.error(res.data.message);
        return;
      }
      if (res.status === 201) {
        toast.success(res.data.message);

        navigate("/");
        return;
      }
      if (res.status === 409) toast.error(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleLogin = async (e, user) => {
    e.preventDefault();

    try {
      const { username, email, password } = user;

      if (!email || !password) {
        toast.error("Enter User Credentials");
        return;
      }

      const res = await axios.post("/user/login", { email, password });
      if (res.status === 200) {
        toast.success(res.data.message);

        navigate("/home");

        return;
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const sendResetLink = async (e, user) => {
    e.preventDefault();
    try {
      const { username, email, password } = user;

      if (!email) {
        toast.error("Enter user email");
      }

      const res = await axios.post("/user/sendlink", { email });
      if (res.status === 200) {
        toast.success(res.data.message);

        return;
      }
      toast.error(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const changePassword = async (e, password, email, string) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/user/resetpassword/${string}`, {
        ...password,
        email: email,
      });
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/");
        return;
      }
      toast.error(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        handleRegister,
        handleLogin,
        sendResetLink,
        password,
        setPassword,
        changePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UseUser = () => {
  return useContext(UserContext);
};

export { UserContext, UseUser, UserContextProvider };
