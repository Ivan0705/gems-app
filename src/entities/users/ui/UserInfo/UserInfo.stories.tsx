import { Meta, StoryObj } from "@storybook/react";
import { UserInfo } from "./UserInfo";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";
import "@/app/styles/index.scss";

const meta = {
  title: "entities/users/UserInfo/UserInfo",
  component: UserInfo,
  argTypes: {
    background: {
      color: "control",
    },
  },
  decorators: [withRouter, SuspenseDecorator, ProviderDecorator],
  tags: ["autodocs"],
} as Meta<typeof UserInfo>;

export default meta;

type Story = StoryObj<typeof UserInfo>;

const helper = (path: string) => {
  return {
    parameters: {
      reactRouter: reactRouterParameters({
        location: {
          pathParams: { id: 5 },
        },
        routing: { path: path },
      }),
    },
    args: { disabled: true },
  };
};

export const LightNormal: Story = helper("/users/:id");
LightNormal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkNormal: Story = helper("/users/:id");
DarkNormal.decorators = [ThemeDecorator(Theme.DARK)];

export const LightError: Story = helper("*");
LightError.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkError: Story = helper("*");
DarkError.decorators = [ThemeDecorator(Theme.DARK)];
