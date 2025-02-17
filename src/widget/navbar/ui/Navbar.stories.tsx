import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "widget/navbar/Navbar",
  component: Navbar,
  decorators: [withRouter],
  argTypes: {
    background: {
      color: "control",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
