import { Meta, StoryObj } from "@storybook/react";
import { Page } from "./Page";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Page",
  component: Page,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      color: "control",
    },
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof Page>;

export const Light: Story = {
  args: {
    children: <div>Hello word!</div>,
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    children: <div>Hello word!</div>,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
