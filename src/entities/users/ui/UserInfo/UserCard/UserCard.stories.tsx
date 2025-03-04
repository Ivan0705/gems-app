import { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";

const userInfo = {
  id: 1,
  name: "Cat Bob",
  username: "Karianne",
  email: "Julianne.OConner@kory.org",
  address: {
    street: "Hoeger Mall",
    suite: "Apt. 692",
    city: "South Elvis",
    zipcode: "53919-4257",
    geo: {
      lat: "29.4572",
      lng: "-164.2990",
    },
  },
  phone: "493-170-9623 x156",
  website: "kale.biz",
  company: {
    name: "Robel-Corkery",
    catchPhrase: "Multi-tiered zero tolerance productivity",
    bs: "transition cutting-edge web services",
  },
  goToBack: fn(),
  btn_title: "back",
};

const meta = {
  component: UserCard,
  title: "entities/users/UserInfo/UserCard/UserCard",
  argTypes: {
    background: {
      color: "control",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Light: Story = {
  args: userInfo,
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: userInfo,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
