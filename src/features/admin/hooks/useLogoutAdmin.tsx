import { AppRoutes } from "@/app/providers/router/consts/AppRoutesEnum";
import { useDispatch } from "react-redux";
import { logout } from "../models/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/app/providers/auth_provider/config/useAuth";

export const useLogoutAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toggleAuth } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
    toggleAuth();
    localStorage.removeItem("admin");
    localStorage.removeItem("auth");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate(AppRoutes.HOME);
  };
  return {
    handleLogout,
  };
};
