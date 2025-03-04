import { memo } from "react";
import { Link } from "react-router-dom";
import cls from "./DesktopSidebar.module.scss";
import { useTranslation } from "react-i18next";
import { arrayItems } from "../../consts/consts";
import { useAuth } from "@/app/providers/auth_provider/config/useAuth";
import { loadAuthFromLocalStorage } from "@/features/admin/consts";

export const DesktopSidebar = memo(() => {
  const isAuth = loadAuthFromLocalStorage();
  const { auth } = useAuth();
  const { t } = useTranslation("navbar");

  return (
    <aside className={cls.desktop_sidebar} data-testid="desktop-sidebar">
      <div className={cls.desktop_sidebar_menu}>
        <div className={cls.desktop_sidebar_menu_items_list}>
          {arrayItems.map((el) => (
            <div key={el.to} className={cls.desktop_sidebar_menu_item}>
              {!auth || isAuth ? (
                <Link className={cls.title} to={el.to}>
                  {t(el.title)}
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
});
