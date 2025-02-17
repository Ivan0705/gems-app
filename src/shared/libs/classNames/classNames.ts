import { Mods } from "./types/Mods";

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
