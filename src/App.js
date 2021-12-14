import { Sidebar } from "./layout/SideBar";
import { MainContent } from "./layout/MainContent";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Auth from "@aws-amplify/auth";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthInfo } from "./redux/loginSlice";
import { initDatasetThunk } from "./redux/dataSlice";

Amplify.configure(awsconfig);

/**
 * This renders the app itself and contains some app-wide logic related to login information.
 */
const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);
  const jwt = Auth.currentSession();

  // Run this request once when the component first renders to request characters
  useEffect(async () => {
    const promise = await dispatch(
      initDatasetThunk({
        jwt: (await jwt).getIdToken().getJwtToken(),
      })
    );
    return () => {
      promise.abort();
    };
  }, [initDatasetThunk]);

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
