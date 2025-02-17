import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Loader",
  component: Loader,
  decorators: [ProviderDecorator],
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      color: "control",
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
