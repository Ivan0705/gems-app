import { PostItem } from "./PostItem";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";

const meta = {
  title: "entities/posts/PostItem/PostItem",
  component: PostItem,
  decorators: [ProviderDecorator],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof PostItem>;

// noinspection JSUnusedGlobalSymbols
export default meta;

type Story = StoryObj<typeof PostItem>;

export const Light: Story = {
  args: {
    post: {
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "bodyquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    },
  },
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    post: {
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "bodyquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
