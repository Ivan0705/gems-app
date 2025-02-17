import { Meta, StoryObj } from "@storybook/react";
import { User } from "./User";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import "@/app/styles/index.scss";
import { IUser } from "../../models/types/types";

const meta = {
  title: "entities/users/User/User",
  component: User,
  decorators: [ProviderDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
  tags: ["autodocs"],
} as Meta<typeof User>;

export default meta;

type Story = StoryObj<typeof User>;

type User = Partial<IUser>;

const user: User = { id: 1, name: "Maria Cat" };

export const Light: Story = {
  args: {
    user: { id: 1, name: "Maria Cat" },
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    user: user,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
