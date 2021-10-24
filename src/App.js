import { Sidebar } from './layout/SideBar';
import { MainContent } from './layout/MainContent';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAuthInfo } from './redux/loginSlice';

Amplify.configure(awsconfig);

const App = () => {
  const dispatch = useDispatch();
  // auth state
  // const [authState, setAuthState] = useState(); // authState = nextAuths
  // const [user, setUser] = useState(); // authdata

  //
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
