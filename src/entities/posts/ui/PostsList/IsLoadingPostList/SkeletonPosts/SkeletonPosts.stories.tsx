import { Meta, StoryObj } from "@storybook/react";
import { SkeletonPosts } from "./SkeletonPosts";
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";

export default {
  title: "entities/posts/IsLoadingPostList/SkeletonPosts",
  component: SkeletonPosts,
  argTypes: {
    backgroundColor: { control: "control" },
  },
  tags: ["autodocs"],
} as Meta<typeof SkeletonPosts>;

type Story = StoryObj<typeof SkeletonPosts>;

export const Light: Story = { args: {} };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = { args: {} };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
