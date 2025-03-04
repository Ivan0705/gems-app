import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImg from "./picture/storybook.jpg";
import AvatarCat from "./picture/cat.jpg";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    background: {
      color: "control",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;
/** className - это имя класса для Avatar,
 *
 * src - это картинка для Avatar
 *
 * size - размер Avatar
 *
 * alt - это текстовый атрибут для Avatar
 */
export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};

export const Small_Light: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
Small_Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Small_Dark: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
Small_Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Normal: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Normal_Light: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
Normal_Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Normal_Dark: Story = {
  args: {
    size: 150,
    src: AvatarCat,
  },
};
Normal_Dark.decorators = [ThemeDecorator(Theme.DARK)];
