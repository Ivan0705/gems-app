import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { MobileSetting } from "./MobileSetting";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { fn } from "@storybook/test";
import "@/app/styles/index.scss";

const meta = {
  title: "widget/menu/mobile-setting/MobileSetting",
  component: MobileSetting,
  argTypes: {
    background: {
      color: "control",
    },
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: {},
      },
      routing: { path: "/*" },
    }),
  },
  decorators: [withRouter, SuspenseDecorator, ProviderDecorator],
  tags: ["autodocs"],
} as Meta<typeof MobileSetting>;

export default meta;

type Story = StoryObj<typeof MobileSetting>;

export const Light: Story = {
  args: { onSetting: fn(), isShowGear: true },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: { onSetting: fn(), isShowGear: true } };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
