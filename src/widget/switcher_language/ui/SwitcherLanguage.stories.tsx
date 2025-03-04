import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { SwitcherLanguage } from "./SwitcherLanguage";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "widget/switcher_language/Switcherlanguage",
  component: SwitcherLanguage,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof SwitcherLanguage>;

export default meta;

type Story = StoryObj<typeof SwitcherLanguage>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
