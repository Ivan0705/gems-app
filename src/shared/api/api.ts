export const baseUrl = `https://jsonplaceholder.typicode.com/`;

export const urlWithParms = (params: string) =>
  `https://jsonplaceholder.typicode.com/${params}`;

export const posts = "/posts";

export const users = "/users";

export const userId = (id: number) => `/users/${id}`;
