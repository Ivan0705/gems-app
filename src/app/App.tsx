import "./styles/index.scss";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { useTheme } from "./providers/theme_provider/lib/useTheme";
import { classNames } from "@/shared/libs/classNames/classNames";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])} data-testid="app">
      <AppRouter />
    </div>
  );
};

export default App;
