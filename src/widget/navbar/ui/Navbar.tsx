import { memo, useState } from "react";
import cls from "./Navbar.module.scss";
import { ReactComponent as Diamond } from "@/shared/assets/icons/diamond.svg?react";
import { Icon } from "@/shared/ui/Icon/Icon";
import { MobileSidebar, DesktopSidebar } from "@/widget/menu";
import { MobileSetting } from "@/widget/menu/mobile_sidebar/ui/mobile-setting/MobileSetting";
import { ThemeSwitcher } from "@/shared/themeSwitcher";
import { SwitcherLanguage } from "@/widget/switcher_language";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/shared/consts/router";
import { loadAuthFromLocalStorage } from "@/features/admin/consts";
import { useAuth } from "@/app/providers/auth_provider/config/useAuth";
import { DesctopSignIn, DesktopSignOut, MobileSignOut } from "@/features/admin";
import { ModileSettingSidebar } from "@/widget/menu/modileSettingSidebar/ui/ModileSettingSidebar";

export const Navbar = memo(() => {
  const isAuth = loadAuthFromLocalStorage();
  const [show, setShow] = useState(false);
  const [isShowGear, setIsShowGear] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAuth();

  const showModal = () => {
    setShow((prev) => !prev);
    setIsShowGear(false);
  };

  const onSetting = () => {
    setIsShowGear((prev) => !prev);
    setShow(false);
  };

  const goToMain = () => {
    navigate(AppRoutes.MAIN);
  };

  const isLogin = !auth || isAuth ? <DesktopSignOut /> : <DesctopSignIn />;
  const isMobileSignOut =
    !auth || isAuth ? (
      <div className={cls.modileSigOutTitile}>
        <MobileSignOut />
      </div>
    ) : null;

  return (
    <header className={cls.navbar} data-testid="navbar">
      <div className={cls.navbar_wrapper}>
        <div
          className={cls.navbar_logo}
          data-testid="diamond"
          onClick={goToMain}
        >
          <Icon
            Svg={Diamond}
            className={cls.navbar_logoPicture}
            data-cy="diamond"
          />
          <h4>Gems</h4>
        </div>
        <div className={cls.navbar_btns}>
          <div className={cls.btn} role="theme_switcher">
            <ThemeSwitcher />
          </div>
          <div className={cls.btn}>
            <SwitcherLanguage />
          </div>
          {isLogin}
          {isMobileSignOut}
        </div>
      </div>
      {show && <MobileSidebar show={show} onClose={showModal} />}
      {isShowGear && (
        <MobileSetting onSetting={onSetting} isShowGear={isShowGear} />
      )}
      <DesktopSidebar />
      <ModileSettingSidebar showModal={showModal} onSetting={onSetting} />
    </header>
  );
});
