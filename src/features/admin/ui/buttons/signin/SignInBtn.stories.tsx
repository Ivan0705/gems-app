import { Meta, StoryObj } from "@storybook/react";
import { SigninBtn } from "./SigninBtn";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { withRouter } from "storybook-addon-remix-react-router";
import "@/app/styles/index.scss";

const meta = {
  title: "features/buttons/SigninBtn",
  component: SigninBtn,
  tags: ["autodocs"],
  decorators: [withRouter],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof SigninBtn>;

export default meta;

type Story = StoryObj<typeof SigninBtn>;

export const LightSignInBtn: Story = { args: {} };
LightSignInBtn.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkSingInBtn: Story = { args: {} };
DarkSingInBtn.decorators = [ThemeDecorator(Theme.DARK)];
