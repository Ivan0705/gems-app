import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";

const meta = {
  title: "entities/counter/Counter",
  component: Counter,
  decorators: [ProviderDecorator],
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof Counter>;

export const Light: Story = {
  args: {},
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
