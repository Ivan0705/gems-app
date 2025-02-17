import { memo } from "react";
import { IUser } from "../../models/types/types";
import { useTranslation } from "react-i18next";
import cls from "./User.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";

interface UserProps {
  user: Partial<IUser>;
  openUser: (id: number) => void;
}

export const User = memo((props: UserProps) => {
  const { user, openUser } = props;
  const { t } = useTranslation("button");

  return (
    <article
      key={user.id}
      className={cls.user}
      onClick={() => openUser(user.id!)}
      data-testid="user"
    >
      <div className={cls.user_title}>{user.name}</div>
      <Button theme={ButtonTheme.OUTLINE} className={cls.btn}>
        {t("read more")}
      </Button>
    </article>
  );
});
