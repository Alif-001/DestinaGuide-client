// src/hooks/useRegister.js
import { useState } from "react";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export function useRegister() {
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const { createNewUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password, nickname } = e.target;

    // Reset errors
    setFormErrors({ email: "", password: "", nickname: "" });

    // Validation
    const errors = { email: "", password: "", nickname: "" };
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (password.value.length < 8) {
      errors.password = "Password must be at least 8 characters.";
      isValid = false;
    }
    if (nickname.value.length < 5) {
      errors.nickname = "Nickname must be at least 5 characters.";
      isValid = false;
    }
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    try {
      const userCredential = await createNewUser(email.value, password.value);
      console.log(userCredential.user);

      // Success alert
      Swal.fire({
        title: "Account created successfully.",
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

  return { formErrors, handleRegister };
}
