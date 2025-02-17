export const baseUrl = `https://jsonplaceholder.typicode.com`;

export const urlWithParams = (params: string) =>
  `https://jsonplaceholder.typicode.com/${params}`;

export const main = "/";

export const posts = "/posts";

export const users = "/users";

export const userId = (id: number | string) => `/users/${id}`;
