import { useDispatch } from 'react-redux';
import { changeCurrentContent } from '../../../redux/displaySlice';

export const CreateAccount = () => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault(); // TODO this will need to go
    // send request to java
    // route to login screen
    dispatch(changeCurrentContent({ newContent: 'login' }));
  };

  return (
    <>
      <h2>Create an Account</h2>
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

        <div className="form-group">
          <label for="password2">
            Confirm password:
            <input
              type="password"
              name="password2"
              id="password2"
              className="form-control"
              required
            />
          </label>
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          value="Create Account"
        />
      </form>
    </>
  );
};
