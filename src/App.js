import { Sidebar } from "./layout/SideBar";
import { MainContent } from "./layout/MainContent";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthInfo } from "./redux/loginSlice";
import { getAllResourcesThunk, initDatasetThunk } from "./redux/dataSlice";

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

  // Run this request once when the app first renders to request all data
  useEffect(() => {
    if (authInfo.user) {
      // because the amplify login is a bit glitchy when it comes to logging out when the token is expired
      const promise = dispatch(
        initDatasetThunk({
          jwt: authInfo.user.signInUserSession.idToken.jwtToken,
        })
      );
      return () => {
        promise.abort();
      };
    }
  }, [initDatasetThunk]);

  return (
    <div className="App row m-4">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default withAuthenticator(App);
