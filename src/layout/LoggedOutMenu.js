import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentContent } from '../redux/displaySlice';
import { logIn } from '../redux/loginSlice';

export const LoggedOutMenu = (props) => {
  const dispatch = useDispatch();

  const createAccountHandler = (event) => {
    event.preventDefault();
    dispatch(changeCurrentContent({ newContent: 'createAccount' }));
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#">Log In</a>
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
