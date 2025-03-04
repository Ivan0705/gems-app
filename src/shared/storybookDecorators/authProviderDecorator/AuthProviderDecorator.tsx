import { AuthProvider } from "@/app/providers/auth_provider";

export const AuthProviderDecorator = (Story: any) => {
  return (
    <AuthProvider>
      <Story />
    </AuthProvider>
  );
};
