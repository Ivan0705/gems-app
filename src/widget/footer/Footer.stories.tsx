import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";

const meta = {
  title: "widget/footer/Footer",
  component: Footer,
  argTypes: {
    background: {
      color: "control",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const LightFooter: Story = { args: {} };
LightFooter.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkFooter: Story = { args: {} };
DarkFooter.decorators = [ThemeDecorator(Theme.DARK)];
