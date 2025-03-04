import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { PostsList } from "./PostsList";
import { postsForTesting } from "../../consts";

const meta = {
  title: "entities/posts/PostsList/PostsList",
  component: PostsList,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof PostsList>;

export default meta;

type Story = StoryObj<typeof PostsList>;

const posts = postsForTesting;

export const Light: Story = {
  args: {
    search: "",
    posts: posts,
  },
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    search: "",
    posts: posts,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
