import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";
import { SkeletonUserInfo } from "./SkeletonUserInfo";

const meta = {
  title: "entities/users/UserInfo/SkeletonUserInfo/SkeletonUserInfo",
  component: SkeletonUserInfo,
  decorators: [ProviderDecorator],
  argTypes: {
    backgroundColor: { control: "control" },
  },
  tags: ["autodocs"],
} as Meta<typeof SkeletonUserInfo>;

export default meta;

type Story = StoryObj<typeof SkeletonUserInfo>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
