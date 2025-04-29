import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../auth/useAuth";

const useLogin = () => {
  const { loginUser,setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    setFormErrors({ email: "", password: "", nickname: "" });

    try {
      const userCredential = await loginUser(email.value, password.value);
      console.log(userCredential.user);

      // Success alert
      Swal.fire({
        title: "Login successfully.",
        text: "Welcome to DestinaGuide.",
        icon: "success",
        background: "#1e1e1e",
        color: "#fff",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
        customClass: { popup: "swal2-dark" },
      }).then((res) => {
        if (res.isConfirmed) {
          e.target.reset();
          navigate(from, { replace: true });
        }
      });
    } catch (error) {
      console.error(error);
      e.target.reset();
      Swal.fire({
        title: "Error",
        text: error.code,
        icon: "error",
        background: "#1e1e1e",
        color: "#fff",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again",
        customClass: { popup: "swal2-dark" },
      }).then(() =>{
        setLoading(false)
      });
    }
  };

  return { handleLogin, formErrors };
};

export default useLogin;
