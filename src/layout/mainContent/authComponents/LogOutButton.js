import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/loginSlice";
import { Auth } from "aws-amplify";

/**
 * This is a custom-ish signout button that connects to the AWS Amplify Auth object in order
 * to sign the user out in AWS Cognito.
 */
export const LogOutButton = () => {
  const dispatch = useDispatch();

  const clickHandler = async () => {
    try {
      await Auth.signOut(); // This is just a pre-built option from AWS
      await dispatch(logOut());
    } catch (err) {
      console.error("Error signing out: " + err);
    }
  };
  return <button onClick={clickHandler}>Sign Out</button>;
};
