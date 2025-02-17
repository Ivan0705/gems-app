import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { Meta, StoryObj } from "@storybook/react";
import { SkeletonUsertsIsloading } from "./SkeletonUsersIsLoading";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";

const meta = {
  title: "entities/users/UsersList/SkeletonUsers/SkeletonUsers",
  component: SkeletonUsertsIsloading,
  decorators: [ProviderDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
  tags: ["autodocs"],
} as Meta<typeof SkeletonUsertsIsloading>;

export default meta;

type Story = StoryObj<typeof SkeletonUsertsIsloading>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
