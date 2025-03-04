import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Input",
  component: Input,
  decorators: [ProviderDecorator],
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      color: "control",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: "Type text",
    value: "Hello word!",
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    placeholder: "Type text",
    value: "Hello word!",
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
