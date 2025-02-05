import type { Preview } from "@storybook/react";
import { I18nextDecorator } from "../src/shared/storybookDecorators/i18nextDecorator/i18nextDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        decorators: [I18nextDecorator],
      },
    },
  },
};
export default preview;
