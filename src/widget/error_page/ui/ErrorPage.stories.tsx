import { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";

const meta = {
  title: "widget/error-page/ErrorPage",
  component: ErrorPage,
  argTypes: {
    background: {
      color: "control",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
