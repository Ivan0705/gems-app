import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";
import { AboutGemsPage } from "./AboutGemsPage";

const meta = {
  title: "page/AboutGemsPage",
  component: AboutGemsPage,
  decorators: [ProviderDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
  tags: ["autodocs"],
} as Meta<typeof AboutGemsPage>;

export default meta;

type Story = StoryObj<typeof AboutGemsPage>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
