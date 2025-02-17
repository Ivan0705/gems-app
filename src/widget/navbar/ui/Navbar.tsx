import { memo, useState } from "react";
import cls from "./Navbar.module.scss";
import { ReactComponent as BurgerMenu } from "@/shared/assets/icons/burger-menu.svg?react";
import { ReactComponent as Diamond } from "@/shared/assets/icons/diamond.svg?react";
import { Icon } from "@/shared/ui/Icon/Icon";
import { MobileSidebar, DesktopSidebar } from "@/widget/menu";
import { ReactComponent as Gear } from "@/shared/assets/icons/gear.svg?react";
import { MobileSetting } from "@/widget/menu/mobile_sidebar/ui/mobile-setting/MobileSetting";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { ThemeSwitcher } from "@/shared/themeSwitcher";
import { SwitcherLanguage } from "@/widget/switcher_language";
import { useNavigate } from "react-router-dom";

export const Navbar = memo(() => {
  const [show, setShow] = useState(false);

  const [isShowGear, setIsShowGear] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setShow((prev) => !prev);
    setIsShowGear(false);
  };

  const onSetting = () => {
    setIsShowGear((prev) => !prev);
    setShow(false);
  };

  const goToMain = () => {
    navigate("/");
  };

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
          <div className={cls.navbar_mobile}>
            <Button
              theme={ButtonTheme.CLEAR}
              className={cls.gearBtn}
              onClick={onSetting}
              data-testid="gear"
            >
              <Icon Svg={Gear} className={cls.navbar_gearSetting} />
            </Button>
            <Button
              theme={ButtonTheme.CLEAR}
              className={cls.burgerBtn}
              onClick={showModal}
            >
              <Icon Svg={BurgerMenu} className={cls.navbar_burgerMenu} />
            </Button>
          </div>
        </div>
      </div>
      {show && <MobileSidebar show={show} onClose={showModal} />}
      {isShowGear && (
        <MobileSetting onSetting={onSetting} isShowGear={isShowGear} />
      )}
      <DesktopSidebar />
    </header>
  );
});
