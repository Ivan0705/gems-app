import { memo } from "react";
import cls from "./MobileSetting.module.scss";
import { SwitcherLanguage } from "@/widget/switcher_language";
import { ThemeSwitcher } from "@/shared/themeSwitcher";
import { IconColor } from "@/shared/ui/Icon/consts";
import { SwitcherLanguageColor } from "@/widget/switcher_language/model/enums";

interface MobileSettingProps {
  onSetting: () => void;
  isShowGear: boolean;
}

export const MobileSetting = memo((props: MobileSettingProps) => {
  const { onSetting, isShowGear } = props;

  return (
    <div className={cls.mobile_setting}>
      {isShowGear && (
        <div className={cls.mobile_setting_wrapper}>
          <div className={cls.item} onClick={onSetting}>
            <div className={cls.btn}>
              <ThemeSwitcher color={IconColor.WHITE} />
            </div>
          </div>
          <div className={cls.item} color={IconColor.WHITE} onClick={onSetting}>
            <div className={cls.btn}>
              <SwitcherLanguage color={SwitcherLanguageColor.WHITE} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
