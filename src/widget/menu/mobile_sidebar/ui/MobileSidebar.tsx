import { memo } from "react";
import cls from "./MobileSidebar.module.scss";
import { Link } from "react-router-dom";
import { arrayItems } from "../../consts/consts";
import { useTranslation } from "react-i18next";

interface MobileSidebarProps {
  onClose: () => void;
  show: boolean;
  display?: string;
}

export const MobileSidebar = memo((props: MobileSidebarProps) => {
  const { onClose, show, display } = props;
  const { t } = useTranslation("navbar");

  return (
    <aside data-testid="mobile-sidebar">
      {show && (
        <div className={cls.mobileSidebar} style={{ display: display }}>
          <div className={cls.mobileSidebar_menu}>
            {arrayItems.map((el) => (
              <div key={el.to} className={cls.item} onClick={onClose}>
                <Link to={el.to}>
                  <div className={cls.title}>{t(el.title)}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
});
