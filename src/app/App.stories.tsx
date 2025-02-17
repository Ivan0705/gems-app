import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import App from "./App";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "./providers/theme_provider/lib/ThemeContext";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";

export default {
  title: "app/App",
  component: App,
  decorators: [withRouter, ProviderDecorator, SuspenseDecorator],
  tags: ["autodocs"],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: { path: "*" },
    }),
  },
  argTypes: {
    backgroundColor: { control: "control" },
  },
} as Meta<typeof App>;

type Story = StoryObj<typeof App>;

export const Light: Story = {
  args: {
    name: "Light",
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    name: "Dark",
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
