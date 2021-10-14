import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentContent } from '../redux/displaySlice';
import { logIn } from '../redux/loginSlice';

export const LoggedOutMenu = (props) => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    // will need to change the mainContent component to a login component
    dispatch(changeCurrentContent({ newContent: 'login' }));
    dispatch(logIn());
  };

  const createAccountHandler = (event) => {
    event.preventDefault();
    dispatch(changeCurrentContent({ newContent: 'createAccount' }));
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={loginHandler}>
            Log In
          </a>
        </li>
        <li>
          <a href="#" onClick={createAccountHandler}>
            Create Account
          </a>
        </li>
      </ul>
    </nav>
  );
};
