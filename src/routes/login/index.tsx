import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";

import { authCredentials } from "@/providers";

export const LoginPage = () => {
  return (
    <AuthPage
      type="login"
      registerLink={false}
      forgotPasswordLink={false}
      title={<ThemedTitleV2 collapsed={false} text="Dashboard" />}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
