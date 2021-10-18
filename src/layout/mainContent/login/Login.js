import { useDispatch } from 'react-redux';
import { changeCurrentContent } from '../../../redux/displaySlice';
import { logIn } from '../../../redux/loginSlice';

export const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(logIn());
    dispatch(changeCurrentContent({ newContent: 'home' }));
  };

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label for="username">
            Username:
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label for="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              required
            />
          </label>
        </div>

        <input type="submit" className="btn btn-primary" value="Log In" />
      </form>
    </>
  );
};
