import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const useLogin = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
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
          navigate("/", { replace: true });
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
      });
    }
  };

  return { handleLogin, formErrors };
};

export default useLogin;
