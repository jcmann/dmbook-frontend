import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "@aws-amplify/core";
import awsconfig from "../../../aws-exports";

Amplify.configure(awsconfig);

/**
 * This is a wrapper for a provided AWS AmplifyAuthenticator component that handles the login and user
 * registration process.
 */
export const Login = () => {
  return <AmplifyAuthenticator />;
};
