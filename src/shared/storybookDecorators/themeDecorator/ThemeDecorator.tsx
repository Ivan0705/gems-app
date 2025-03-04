import { Theme } from "@/app/providers/theme_provider/models/enums";
import { ThemeProvider } from "@/app/providers/theme_provider/ui/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => (
  <ThemeProvider>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
