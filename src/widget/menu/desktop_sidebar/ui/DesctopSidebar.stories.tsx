import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import "@/app/styles/index.scss";
import { DesktopSidebar } from "./DesktopSidebar";

const meta = {
  title: "widget/menu/DesktopSidebar",
  component: DesktopSidebar,
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: { path: "*" },
    }),
  },
  decorators: [ProviderDecorator, withRouter],
  argTypes: {
    background: {
      color: "control",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DesktopSidebar>;

export default meta;

type Story = StoryObj<typeof DesktopSidebar>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
