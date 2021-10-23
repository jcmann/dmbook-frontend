import { useDispatch } from 'react-redux';
import { changeCurrentContent } from '../../../redux/displaySlice';
import { logIn } from '../../../redux/loginSlice';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Amplify from '@aws-amplify/core';
import awsconfig from '../../../aws-exports';

Amplify.configure(awsconfig);

export const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(logIn());
    dispatch(changeCurrentContent({ newContent: 'home' }));
  };

  return <AmplifyAuthenticator />;
};
