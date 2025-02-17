import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";
import { MainPage } from "./MainPage";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";

const meta = {
  title: "page/MainPage",
  component: MainPage,
  decorators: [withRouter, ProviderDecorator, SuspenseDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: { path: "*" },
    }),
  },
  tags: ["autodocs"],
} as Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
