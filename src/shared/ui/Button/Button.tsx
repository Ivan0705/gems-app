import { classNames } from "@/shared/libs/classNames/classNames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import cls from "./Button.module.scss";
import { Mods } from "@/shared/libs/classNames/types/Mods";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";
import { ButtonSize, ButtonTheme } from "./consts/enums";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  toggleTheme: () => void;
  theme: ButtonTheme;
  className: string;
  square: boolean;
  size: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
}

type ButtonType = Partial<ButtonProps | ObjectProperties>;

export const Button = memo((props: ButtonType) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.button, mods, [className])}
      disabled={disabled}
      {...otherProps}
      data-testid="button"
    >
      {children}
    </button>
  );
});
