import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";
import { AboutUsersPage } from "./AboutUsersPage";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";

const meta = {
  title: "page/AboutUsersPage",
  component: AboutUsersPage,
  decorators: [withRouter, ProviderDecorator, SuspenseDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "users/1" },
    }),
  },
  tags: ["autodocs"],
} as Meta<typeof AboutUsersPage>;

export default meta;

type Story = StoryObj<typeof AboutUsersPage>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
