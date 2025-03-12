"use strict";
/* eslint-disable max-params */
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconCypress = exports.outLineButtonCypress = exports.sizeMButtonCypress = exports.clearButtonCypress = exports.buttonCypress = void 0;
var rgdColors_1 = require("../../../consts/colors/rgdColors");
var consts_1 = require("../../../consts");
var buttonCypress = function (index, rgb, padding) {
    return cy
        .get("button")
        .eq(index)
        .should("have.class", consts_1.button)
        .and("have.css", "cursor", "pointer")
        .and("have.css", "color", rgb)
        .and("have.css", "padding", padding)
        .trigger("hover", { force: true })
        .and("have.css", "opacity", "1")
        .and("have.css", "fill-opacity", "1")
        .and("have.css", "stroke-opacity", "1");
};
exports.buttonCypress = buttonCypress;
var clearButtonCypress = function (index, rgb) {
    return cy
        .get("button")
        .eq(index)
        .and("have.class", consts_1.clear)
        .and("have.css", "padding", "0px")
        .and("have.css", "border", "0px none " + rgb)
        .and("have.css", "background", "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box")
        .and("have.css", "outline", rgb + " none 0px");
};
exports.clearButtonCypress = clearButtonCypress;
var sizeMButtonCypress = function (index) {
    return cy
        .get("button")
        .eq(index)
        .and("have.class", consts_1.size_m)
        .and("have.css", "font", '16px / 24px consolas, "Times New Roman", serif')
        .and("have.class", consts_1.size_m)
        .and("have.css", "font", '16px / 24px consolas, "Times New Roman", serif');
};
exports.sizeMButtonCypress = sizeMButtonCypress;
var outLineButtonCypress = function (index, rgb) {
    return cy
        .get("button")
        .eq(index)
        .and("have.class", consts_1.outline)
        .and("have.css", "border", "1px solid " + rgb)
        .and("have.css", "color", rgb)
        .and("have.css", "background", "".concat(rgdColors_1.black, " none repeat scroll 0% 0% / auto padding-box border-box"));
};
exports.outLineButtonCypress = outLineButtonCypress;
var iconCypress = function (index, rgb, height, margin_right, margin_left) {
    if (height === void 0) { height = "45px"; }
    if (margin_right === void 0) { margin_right = "25px"; }
    if (margin_left === void 0) { margin_left = "5px"; }
    return cy
        .get("svg")
        .eq(index)
        .and("have.class", consts_1.icon)
        .and("have.css", "fill", rgb)
        .and("have.css", "width", "45px")
        .and("have.css", "height", height)
        .and("have.css", "margin-right", margin_right)
        .and("have.css", "margin-left", margin_left);
};
exports.iconCypress = iconCypress;
