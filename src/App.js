import { Sidebar } from "./layout/SideBar";
import { MainContent } from "./layout/MainContent";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthInfo } from "./redux/loginSlice";

Amplify.configure(awsconfig);

const App = () => {
  const dispatch = useDispatch();
  const authInfo = useSelector((state) => state.login.authInfo);

  // useEffect
  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(
        updateAuthInfo({
          authInfo: { authState: nextAuthState, user: authData },
        })
      );
    });
  }, []);

  return (
    <div className="App row m-4">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default withAuthenticator(App);
