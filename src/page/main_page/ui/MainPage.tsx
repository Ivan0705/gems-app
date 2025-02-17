import { memo, ReactNode } from "react";
import { Navbar } from "@/widget/navbar/ui/Navbar";
import cls from "./Main.module.scss";
import { Footer } from "@/widget/footer/Footer";

export const MainPage = memo((props: { children?: ReactNode }) => {
  const { children } = props;
  const empty = (
    <div className={cls.main_empty}>
      <b className={cls.main_empty_title}>Empty</b>
    </div>
  );

  return (
    <div className={cls.main} data-testid="main_page">
      <Navbar />
      <main className={cls.main_wrapper}>{children ? children : empty}</main>
      <Footer />
    </div>
  );
});
