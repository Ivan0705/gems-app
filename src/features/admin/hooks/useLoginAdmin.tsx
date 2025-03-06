import { useAppDispatch } from "@/shared/hooks/redux/redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginFail,
  loadingLogin,
  loginSuccess,
} from "../models/slice/authSlice";
import { IAdmin } from "../models/types/IAdmin";
import { UserService } from "../models/service/UsersSErvice";
import { AppRoutes } from "@/app/providers/router/consts/AppRoutesEnum";
import { useAuth } from "@/app/providers/auth_provider/config/useAuth";
import { useDebounce } from "@/shared/hooks/debounce/useDebounce";
import { useThrottle } from "@/shared/hooks/throttle/usethrottle";

export const useLoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);
  const { toggleAuth } = useAuth();

  useEffect(() => {
    setTimeout(async () => {
      /*AbortController - это экспериментальная технология
      Так как спецификация этой технологии ещё не стабилизировалась*/

      const controller = new AbortController();
      const users = (await UserService.getUsers(controller)).data;
      setAdmins(users);
      return () => controller.abort();
    });
  }, [setAdmins]);

  const handleLogin = () => {
    try {
      dispatch(loadingLogin());
      setTimeout(() => {
        const adminByEmailAndPassword = admins.map((ad: IAdmin) =>
          ad.email === email && ad.password === password ? ad : undefined,
        );

        const filteredAdmin = adminByEmailAndPassword.filter(
          (ad) => ad != undefined,
        );
        const checked = filteredAdmin ? filteredAdmin[0] : undefined;

        if (checked) {
          const obj = {
            ...filteredAdmin[0],
          };

          dispatch(loginSuccess(obj));
          toggleAuth();
          localStorage.setItem("auth", "true");
          localStorage.setItem("admin", obj.username!);
          localStorage.setItem("email", email);

          navigate(AppRoutes.HOME);
        } else {
          dispatch(loginFail("Error..."));
        }
      });
    } catch (e) {
      dispatch(loginFail("Error..."));
      console.log(e);
    }
    setPassword("");
    setEmail("");
  };
  const handleLoginDebounced = useDebounce(handleLogin, 500);

  const handleLoginThrottled = useThrottle(handleLogin, 500);

  return {
    handleLogin,
    handleLoginDebounced,
    handleLoginThrottled,
    email,
    setEmail,
    password,
    setPassword,
  };
};
