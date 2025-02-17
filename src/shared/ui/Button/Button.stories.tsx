/* eslint-disable max-lines */
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { ButtonSize, ButtonTheme } from "./consts/enums";
import "@/app/styles/index.scss";
import { Icon } from "../Icon/Icon";
import { IconSize } from "../Icon/consts";
import { ReactComponent as Diamond } from "@/shared/assets/icons/diamond.svg?react";

const meta = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text1",
  },
};

export const Clear: Story = {
  args: {
    children: "Text2",
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Text3",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "Text4",
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "Text5",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXl: Story = {
  args: {
    children: "Text6",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Text7",
    theme: ButtonTheme.OUTLINE,
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme: Story = {
  args: {
    children: "Text8",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "Text9",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXl: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};

export const WithNormalIcon: Story = {
  args: {
    children: <Icon Svg={Diamond} size={IconSize.NORMAL} />,
    theme: ButtonTheme.OUTLINE,
    disabled: false,
  },
};

export const WithSmallIcon: Story = {
  args: {
    children: <Icon Svg={Diamond} size={IconSize.SMALL} />,
    theme: ButtonTheme.OUTLINE,
    disabled: false,
  },
};
