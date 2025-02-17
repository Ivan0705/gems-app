import { Gems } from "./Gems";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";

const meta = {
  title: "entities/gems/Gems",
  component: Gems,
  decorators: [ProviderDecorator],
  tags: ["autodocs"],
} as Meta<typeof Gems>;

// noinspection JSUnusedGlobalSymbols
export default meta;

type Story = StoryObj<typeof Gems>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
