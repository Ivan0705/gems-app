import { classNames } from "@/shared/libs/classNames/classNames";
import { Mods } from "@/shared/libs/classNames/types/Mods";
import { InputHTMLAttributes, memo, useRef } from "react";
import cls from "./Input.module.scss";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className: string;
  value: string | number;
  onChange: (value: string | any) => void;
  autoFocus: boolean;
  readonly: boolean;
}

type InputType = Partial<InputProps | ObjectProperties>;

export const Input = memo((props: InputType) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div
      className={classNames(cls.InputWrapper, mods, [className])}
      data-testid="input"
    >
      {placeholder && (
        <div className={cls.placeholder}> {placeholder + `>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
          aria-label="const-input"
        />
      </div>
    </div>
  );
});
