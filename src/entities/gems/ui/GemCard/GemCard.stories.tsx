import { Meta, StoryObj } from "@storybook/react";
import { GemCard } from "./GemCard";
import { ProviderDecorator } from "@/shared/storybookDecorators/providerDecorator/ProviderDecorator";
import ruby from "../../pictures/ruby/ruby1.jpg";
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/storybookDecorators/themeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/theme_provider/models/enums";

const meta = {
  title: "entities/gems/GemCard/GemCard",
  component: GemCard,
  decorators: [ProviderDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof GemCard>;

export default meta;

type Story = StoryObj<typeof GemCard>;

export const Light: Story = {
  args: {
    title: "Ruby",
    text: "Ruby (Latin: rubens, rubinus — red; obsolete terms include 'sardis, lal, red garnet') is a variety of corundum that comes in various shades of red, depending on the percentage of chromium in its composition. The chemical composition of the mineral is aluminum oxide (Al₂O₃). In terms of hardness, a true ruby ranks just below diamond.History. The earliest references to rubies date back to ancient times, around the 6th century BC. Initially, the mineral was mined in India, but as trade developed, the stone made its way to Greece, Rome, and Egypt. It is evident that this precious gem was found only in the jewelry of wealthy individuals, royal nobles, and members of the clergy. Interestingly, the stone was used to adorn not only jewelry but also clothing, books, household items, and special religious accessories.The main deposits of rubies are located in Myanmar, Sri Lanka, Thailand, Kenya, and Afghanistan. There are also very ancient deposits in the Pamir Mountains (a mountain range in Tajikistan). In Russia, the mineral is mined in the Ural Mountains, but it is not found there in large deposits; it occurs occasionally as a byproduct when extracting corundum.",
    avatar: ruby,
  },
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    title: "Ruby",
    text: "Ruby (Latin: rubens, rubinus — red; obsolete terms include 'sardis, lal, red garnet') is a variety of corundum that comes in various shades of red, depending on the percentage of chromium in its composition. The chemical composition of the mineral is aluminum oxide (Al₂O₃). In terms of hardness, a true ruby ranks just below diamond.History. The earliest references to rubies date back to ancient times, around the 6th century BC. Initially, the mineral was mined in India, but as trade developed, the stone made its way to Greece, Rome, and Egypt. It is evident that this precious gem was found only in the jewelry of wealthy individuals, royal nobles, and members of the clergy. Interestingly, the stone was used to adorn not only jewelry but also clothing, books, household items, and special religious accessories.The main deposits of rubies are located in Myanmar, Sri Lanka, Thailand, Kenya, and Afghanistan. There are also very ancient deposits in the Pamir Mountains (a mountain range in Tajikistan). In Russia, the mineral is mined in the Ural Mountains, but it is not found there in large deposits; it occurs occasionally as a byproduct when extracting corundum.",
    avatar: ruby,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
