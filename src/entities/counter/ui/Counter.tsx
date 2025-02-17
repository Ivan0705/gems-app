import { memo } from "react";
import cls from "./Counter.module.scss";
import { useCounter } from "../hooks/useCounter";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";

export const Counter = memo(() => {
  const { incrementCounter, decrementCounter, count } = useCounter();

  return (
    <section className={cls.counter} data-testid="counter">
      <div className={cls.counter_title}>{count}</div>
      <div className={cls.counter_btns}>
        <Button
          onClick={incrementCounter}
          theme={ButtonTheme.OUTLINE}
          className={cls.btn}
        >
          +
        </Button>
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={decrementCounter}
          className={cls.btn}
        >
          -
        </Button>
      </div>
    </section>
  );
});
