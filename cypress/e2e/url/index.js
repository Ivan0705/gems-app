"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userByID =
  exports.posts =
  exports.users =
  exports.error =
  exports.main =
    void 0;
exports.main = "/";
exports.error = "/*";
exports.users = "/users";
exports.posts = "/posts";
var userByID = function (id) {
  return "/users/".concat(id);
};
exports.userByID = userByID;
