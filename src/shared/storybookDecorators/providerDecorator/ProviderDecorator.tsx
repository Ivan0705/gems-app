import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";

export const ProviderDecorator = (Story: any) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);
