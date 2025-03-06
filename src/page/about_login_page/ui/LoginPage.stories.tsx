import { withRouter } from "storybook-addon-remix-react-router";
import { LoginPage } from "./LoginPage";
import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";
import { AuthProviderDecorator } from "@/shared/storybookDecorators/authProviderDecorator/AuthProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";

const meta = {
  title: "page/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
  decorators: [
    withRouter,
    ProviderDecorator,
    SuspenseDecorator,
    AuthProviderDecorator,
  ],
  argTypes: {
    backroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof LoginPage>;

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const LigthLoginPage: Story = { args: {} };
LigthLoginPage.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkLoginPage: Story = { args: {} };
DarkLoginPage.decorators = [ThemeDecorator(Theme.DARK)];
