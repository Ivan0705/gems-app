import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { MobileSidebar } from "./MobileSidebar";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";
import { fn } from "@storybook/test";

const meta = {
  title: "widget/menu/MobileSidebar",
  component: MobileSidebar,
  argTypes: {
    background: {
      color: "control",
    },
  },
  decorators: [withRouter, SuspenseDecorator, ProviderDecorator],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: {},
      },
      routing: { path: "/*" },
    }),
  },
  tags: ["autodocs"],
} as Meta<typeof MobileSidebar>;

export default meta;

type Story = StoryObj<typeof MobileSidebar>;

export const LightShow: Story = {
  args: { show: true, onClose: fn(), display: `grid` },
};
LightShow.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkShow: Story = {
  args: { show: true, onClose: fn(), display: `grid` },
};
DarkShow.decorators = [ThemeDecorator(Theme.DARK)];

export const LightClose: Story = {
  args: { show: true, onClose: fn() },
};
LightClose.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkClose: Story = {
  args: { show: true, onClose: fn() },
};
DarkClose.decorators = [ThemeDecorator(Theme.DARK)];
