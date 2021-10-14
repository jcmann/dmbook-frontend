export const Login = () => {
  return (
    <>
      <h2>Log In</h2>
      <form>
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
