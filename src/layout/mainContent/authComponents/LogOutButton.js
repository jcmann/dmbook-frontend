import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../redux/loginSlice';
import { Auth } from 'aws-amplify';

export const LogOutButton = () => {
  const dispatch = useDispatch();
  const authInfo = useSelector((state) => state.login.authInfo);

  const clickHandler = async () => {
    try {
      await Auth.signOut();
      await dispatch(logOut());
    } catch (err) {
      console.error('Error signing out: ' + err);
    }
  };
  return <button onClick={clickHandler}>Sign Out</button>;
};
