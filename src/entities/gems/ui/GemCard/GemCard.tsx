import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { memo } from "react";
import cls from "./GemCard.module.scss";
import { classNames } from "@/shared/libs/classNames/classNames";

interface GemCardProps {
  className: string;
  title: string;
  text: string;
  avatar: string;
}

export const GemCard = memo((props: GemCardProps) => {
  const { title, text, avatar, className } = props;

  return (
    <article
      className={classNames(cls.gemCard, {}, [className])}
      data-testid="gemcard"
    >
      <div className={cls.gemCard_wrapper_side}>
        <div className={cls.card}>
          <b className={cls.title}>{title}</b>
          <div className={cls.avatar}>
            <Avatar size={100} src={avatar} />
          </div>
        </div>
      </div>
      <div className={cls.gemCard_text}>
        <div>{text}</div>
      </div>
    </article>
  );
});
