import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import "@/app/styles/index.scss";

const meta = {
  title: "features/SignIn",
  component: SignIn,
  tags: ["autodocs"],
  decorators: [withRouter, ProviderDecorator, SuspenseDecorator],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: { path: "*" },
    }),
  },
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof SignIn>;

export const LightSinIn: Story = { args: {} };
LightSinIn.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkSinIn: Story = { args: {} };
DarkSinIn.decorators = [ThemeDecorator(Theme.DARK)];
