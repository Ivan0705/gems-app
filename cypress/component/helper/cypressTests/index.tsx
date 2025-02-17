/* eslint-disable max-params */

import { black } from "../../../consts/colors/rgdColors";
import { button, clear, icon, outline, size_m } from "../../../consts";

export const buttonCypress = (index: number, rgb: string, padding: string) =>
  cy
    .get("button")
    .eq(index)
    .should("have.class", button)
    .and("have.css", "cursor", "pointer")
    .and("have.css", "color", rgb)
    .and("have.css", "padding", padding)
    .trigger("hover", { force: true })
    .and("have.css", "opacity", "1")
    .and("have.css", "fill-opacity", "1")
    .and("have.css", "stroke-opacity", "1");

export const clearButtonCypress = (index: number, rgb: any) =>
  cy
    .get("button")
    .eq(index)
    .and("have.class", clear)
    .and("have.css", "padding", "0px")
    .and("have.css", "border", "0px none " + rgb)
    .and(
      "have.css",
      "background",
      "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
    )
    .and("have.css", "outline", rgb + " none 0px");

export const sizeMButtonCypress = (index: number) =>
  cy
    .get("button")
    .eq(index)
    .and("have.class", size_m)
    .and("have.css", "font", '16px / 24px consolas, "Times New Roman", serif')
    .and("have.class", size_m)
    .and("have.css", "font", '16px / 24px consolas, "Times New Roman", serif');

export const outLineButtonCypress = (index: number, rgb: any) =>
  cy
    .get("button")
    .eq(index)
    .and("have.class", outline)
    .and("have.css", "border", "1px solid " + rgb)
    .and("have.css", "color", rgb)
    .and(
      "have.css",
      "background",
      `${black} none repeat scroll 0% 0% / auto padding-box border-box`,
    );

export const iconCypress = (
  index: number,
  rgb: string,
  height: string = "45px",
  margin_right: string = "25px",
  margin_left: string = "5px",
) =>
  cy
    .get("svg")
    .eq(index)
    .and("have.class", icon)
    .and("have.css", "fill", rgb)
    .and("have.css", "width", "45px")
    .and("have.css", "height", height)
    .and("have.css", "margin-right", margin_right)
    .and("have.css", "margin-left", margin_left);
