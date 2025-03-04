import { Meta, StoryObj } from "@storybook/react";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";
import { Users } from "./Users";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import { SuspenseDecorator } from "@/shared/storybookDecorators/suspenseDecorator/SuspenseDecorator";

const meta = {
  title: "entities/users/Users/Users",
  component: Users,
  decorators: [ProviderDecorator, SuspenseDecorator, withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: { path: "*" },
    }),
  },
  argTypes: {
    backgroundColor: { control: "control" },
  },
  tags: ["autodocs"],
} as Meta<typeof Users>;

export default meta;

type Story = StoryObj<typeof Users>;

export const Light: Story = {
  args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
