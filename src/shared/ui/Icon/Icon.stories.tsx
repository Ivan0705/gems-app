import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { ReactComponent as Diamond } from "@/shared/assets/icons/diamond.svg?react";
import { IconSize } from "./consts";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    background: {
      color: "color",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Normal: Story = {
  args: { Svg: Diamond, size: IconSize.NORMAL },
};

export const Normal_Light: Story = {
  args: { Svg: Diamond, size: IconSize.NORMAL },
};

Normal_Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Normal_Dark: Story = {
  args: { Svg: Diamond, size: IconSize.NORMAL },
};

Normal_Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Small: Story = {
  args: { Svg: Diamond, size: IconSize.SMALL },
};

export const Small_Light: Story = {
  args: { Svg: Diamond, size: IconSize.SMALL },
};
Small_Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Small_Dark: Story = {
  args: { Svg: Diamond, size: IconSize.SMALL },
};
Small_Dark.decorators = [ThemeDecorator(Theme.DARK)];
