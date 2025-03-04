import { Meta, StoryObj } from "@storybook/react";
import { UserInfoError } from "./UserIfoError";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";

const meta = {
  title: "entities/users/UserInfo/UserInfoError",
  component: UserInfoError,
  argTypes: {
    background: {
      color: "control",
    },
  },
} as Meta<typeof UserInfoError>;

export default meta;

type Story = StoryObj<typeof UserInfoError>;

export const LightUserInfoError: Story = { args: {} };
LightUserInfoError.args = [ThemeDecorator(Theme.LIGHT)];

export const DarkUserInfoError: Story = { args: {} };
DarkUserInfoError.args = [ThemeDecorator(Theme.DARK)];
