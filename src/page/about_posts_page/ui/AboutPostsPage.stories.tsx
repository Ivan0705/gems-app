import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";
import { AboutPostsPage } from "./AboutPostsPage";

const meta = {
  title: "page/AboutPostsPage",
  component: AboutPostsPage,
  decorators: [ProviderDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
  tags: ["autodocs"],
} as Meta<typeof AboutPostsPage>;

export default meta;

type Story = StoryObj<typeof AboutPostsPage>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
