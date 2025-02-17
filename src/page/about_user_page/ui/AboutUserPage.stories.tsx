import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";
import { AboutUserPage } from "./AboutUserPage";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";
import { UserInfo } from "@/entities/users";

const meta = {
  title: "page/AboutUserPage",
  component: AboutUserPage,
  decorators: [withRouter, ProviderDecorator, SuspenseDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
} as Meta<typeof AboutUserPage>;

export default meta;

type Story = StoryObj<typeof AboutUserPage>;

const helper = (path: string) => {
  return {
    render: () => <UserInfo disabled={true} />,
    parameters: {
      reactRouter: reactRouterParameters({
        location: {
          pathParams: { id: 1 },
        },
        routing: { path: path },
      }),
    },
    args: {},
  };
};

export const LightNormal: Story = helper("/users/:id");
LightNormal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkNormal: Story = helper("/users/:id");
DarkNormal.decorators = [ThemeDecorator(Theme.DARK)];

export const LightError: Story = helper("/*");
LightError.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkError: Story = helper("/*");
DarkError.decorators = [ThemeDecorator(Theme.DARK)];
