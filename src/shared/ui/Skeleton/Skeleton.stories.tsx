import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: "50%",
    width: 200,
    height: 200,
  },
};

export const NormalDark: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
  args: {
    border: "50%",
    width: 200,
    height: 200,
  },
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
