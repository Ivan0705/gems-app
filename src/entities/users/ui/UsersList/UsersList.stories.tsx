import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";

import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { UsersList } from "./UsersList";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";

const meta = {
  title: "entities/users/UsersList/UsersList",
  component: UsersList,
  decorators: [ProviderDecorator, withRouter, SuspenseDecorator],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "*" },
    }),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UsersList>;

export default meta;

type Story = StoryObj<typeof UsersList>;

export const Light: Story = {
  args: {
    search: "",
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    search: "",
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
