import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { withRouter } from "storybook-addon-remix-react-router";
import { SignoutBtn } from "./SignoutBtn";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import "@/app/styles/index.scss";

const meta = {
  title: "features/buttons/SignoutBtn",
  component: SignoutBtn,
  tags: ["autodocs"],
  decorators: [withRouter, ProviderDecorator],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof SignoutBtn>;

export default meta;

type Story = StoryObj<typeof SignoutBtn>;

export const LightSignOutBtn: Story = { args: {} };
LightSignOutBtn.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkSingOutBtn: Story = { args: {} };
DarkSingOutBtn.decorators = [ThemeDecorator(Theme.DARK)];
