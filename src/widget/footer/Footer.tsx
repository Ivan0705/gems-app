import cls from "./Footer.module.scss";

export const Footer = () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const getTwoYears = "2024-" + currentYear.toString();
  const date = currentYear === 2024 ? "2024" : getTwoYears;

  const title: string = "Ⓒ " + date + " Gems";

  return (
    <footer className={cls.footer} data-testid="footer">
      <div className={cls.footer_title}>{title} </div>
    </footer>
  );
};
