import { memo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userAPI } from "../../models/slice/UserService";
import { UserCard } from "./UserCard/UserCard";
import { useTranslation } from "react-i18next";
import { IUser } from "../../models/types/types";
import cls from "./UserInfo.module.scss";
import { SkeletonUserInfo } from "./SkeletonUserInfo/SkeletonUserInfo";
import { UserInfoError } from "./UserInfoError/UserIfoError";

interface UserInfoProps {
  disabled?: boolean;
}

export const UserInfo = memo((props: UserInfoProps) => {
  const { id } = useParams();
  const idNumber = Number(id);
  const { t } = useTranslation("button");
  const { disabled } = props;

  const {
    data: users,
    isLoading,
    error,
  } = userAPI.useFetchUserByIdQuery(idNumber);

  const navigate = useNavigate();
  const location = useLocation();

  const fromUsers = location.state?.from?.pathname || `/users`;
  const goToBack = () => navigate(fromUsers);

  return (
    <section className={cls.userInfo} data-testid="user_info">
      {users?.length === 0 && <h1>{t("oops")}</h1>}
      {isLoading && <SkeletonUserInfo />}
      {error && <UserInfoError />}
      {users &&
        users.map((el: IUser) => (
          <UserCard
            key={el.id}
            id={el.id}
            name={el.name}
            username={el.username}
            email={el.email}
            address={el.address}
            phone={el.phone}
            website={el.website}
            company={el.company}
            goToBack={goToBack}
            btn_title={t("back")}
            disabled={disabled}
          />
        ))}
    </section>
  );
});
