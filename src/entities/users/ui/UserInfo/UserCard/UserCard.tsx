import { IAddress, ICompany } from "@/entities/users/models/types/types";
import { memo } from "react";
import cls from "./UserCard.module.scss";
import { useTranslation } from "react-i18next";
import user from "../../../picture/user/user.png";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";

interface UserCardProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  goToBack: () => void | any;
  btn_title: string;
  disabled?: boolean;
}

export const UserCard = memo((props: UserCardProps) => {
  const {
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
    goToBack,
    btn_title,
    disabled,
  } = props;
  const { t } = useTranslation("user");

  return (
    <article>
      <div key={id} className={cls.userCard} data-testid="user_card">
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={goToBack}
          className={cls.btn}
          disabled={disabled}
        >
          {btn_title}
        </Button>
        <div className={cls.user}>
          <div className={cls.userCard_avatar}>
            <figure className={cls.userCard_avatar}>
              <Avatar size={280} src={user} />
            </figure>
          </div>
          <div className={cls.userCard_userInfo}>
            <div className={cls.name}>
              {t("name")}:{name}
            </div>
            <div>
              {t("username")}:{username}
            </div>
            <div>
              {t("email")}:{email}
            </div>
            <address>
              {t("street")}:{address.street}
            </address>
            <address>
              {t("city")}:{address.city}
            </address>
            <address>
              {t("suite")}:{address.suite}
            </address>
            <address>
              {t("zipcode")}:{address.zipcode}
            </address>
            <address>
              {t("geo_lat")}:{address.geo.lat}
            </address>
            <address>
              {t("geo_lng")}:{address.geo.lng}
            </address>
            <div>
              {t("phone")}:{phone}
            </div>
            <div>
              {t("website")}:{website}
            </div>
          </div>
        </div>
        <div className={cls.userCard_companyInfo}>
          <div>{t("company")}: </div>
          <div>
            {t("company_name")}:{company.name}
          </div>
          <div>
            {t("company_catchPhrase")}:{company.catchPhrase}
          </div>
          <div>
            {t("company_bs")}:{company.bs}
          </div>
        </div>
      </div>
    </article>
  );
});
