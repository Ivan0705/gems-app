import { baseUrl, url } from "@/app/providers/browser_router/consts";

export const baseName = () => {
  return process.env.NODE_ENV === "production" ? url : baseUrl;
};
