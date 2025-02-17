import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { GemCard } from "./GemCard/GemCard";
import { arrayGems } from "../consts/arrayGems";
import { Gem } from "../models/types/types";
import cls from "./Gem.module.scss";
import { LOCAL_STORAGE_KEY } from "../consts/localStorageKey";
import { ThemeSize } from "../consts/enums";
import { Icon } from "@/shared/ui/Icon/Icon";
import { ReactComponent as Shape } from "@/shared/assets/icons/shape.svg?react";
import { ReactComponent as Tiled } from "@/shared/assets/icons/tiled.svg?react";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";

const defaultSize = localStorage.getItem(LOCAL_STORAGE_KEY) || ThemeSize.BIG;

export const Gems = memo(() => {
  const { t } = useTranslation(["gems"]);
  const big = cls.gem_wrapper_big;
  const mini = cls.gem_wrapper_mini;

  const [size, setSize] = useState<string | ThemeSize>(defaultSize);

  const toggleTheme = () => {
    const newSize = size === ThemeSize.MINI ? ThemeSize.BIG : ThemeSize.MINI;
    setSize?.(newSize);
    localStorage.setItem(LOCAL_STORAGE_KEY, newSize);
  };

  return (
    <section className={cls.gem} data-testid="gems">
      <div className={cls.switch}>
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
          {size === ThemeSize.BIG ? (
            <Icon Svg={Shape} className={cls.btn} />
          ) : (
            <Icon Svg={Tiled} className={cls.btn} />
          )}
        </Button>
      </div>
      <div className={cls.gem_wrapper}>
        {arrayGems.map((gem: Gem) => (
          <GemCard
            key={gem.title}
            className={size === ThemeSize.BIG ? big : mini}
            title={t(gem.title)}
            text={t(gem.text)}
            avatar={gem.avatar}
          />
        ))}
      </div>
    </section>
  );
});
