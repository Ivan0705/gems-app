import { Posts } from "./Posts";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";

const meta = {
  title: "entities/posts/Posts/Posts",
  component: Posts,
  decorators: [ProviderDecorator],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Posts>;

export default meta;

type Story = StoryObj<typeof Posts>;

export const Light: Story = {
  args: {},
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
