import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { Icon } from "@/shared/ui/Icon/Icon";
import { memo } from "react";
import { ReactComponent as Gear } from "@/shared/assets/icons/gear.svg?react";
import { ReactComponent as BurgerMenu } from "@/shared/assets/icons/burger-menu.svg?react";
import cls from "./ModileSettingSidebar.module.scss";
import { IconColor } from "@/shared/ui/Icon/consts";
import { SiginBtn } from "@/features/admin";
import { useAuth } from "@/app/providers/auth_provider/config/useAuth";
import { loadAuthFromLocalStorage } from "@/features/admin/consts";

interface ModileSettingSidebarProps {
  showModal: () => void;
  onSetting: () => void;
}
export const ModileSettingSidebar = memo((props: ModileSettingSidebarProps) => {
  const { showModal, onSetting } = props;
  const { auth } = useAuth();
  const isAuth = loadAuthFromLocalStorage();

  return (
    <div className={cls.modileSitteingSidebar}>
      <div className={cls.modileSitteingSidebar_menu}>
        <div className={cls.modileSitteingSidebar_items}>
          <div className={cls.modileSitteingSidebar_item}>
            <Button
              theme={ButtonTheme.CLEAR}
              className={cls.modileSitteingSidebar_gearBtn}
              onClick={onSetting}
              data-testid="gear"
            >
              <Icon
                Svg={Gear}
                className={cls.gearSetting}
                color={IconColor.WHITE}
              />
            </Button>
          </div>
          <div className={cls.modileSitteingSidebar_item}>
            {!auth || isAuth ? (
              <Button
                theme={ButtonTheme.CLEAR}
                className={cls.modileSitteingSidebar_burgerBtn}
                onClick={showModal}
              >
                <Icon
                  Svg={BurgerMenu}
                  className={cls.burgerMenu}
                  color={IconColor.WHITE}
                />
              </Button>
            ) : (
              <div className={cls.btnSignIn}>
                <SiginBtn />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
