import { useDispatch, useSelector } from "react-redux";

import { deleteResourceThunk, initDatasetThunk } from "../../redux/dataSlice";

/**
 * This delete icon is rendered for each row in a table. It requires a resource type and an ID for that resource
 * to be passed in via props. These are then used to build the DELETE request which is sent to the API via the
 * deleteClickHandler/deleteResourceThunk
 */
const DeleteIcon = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  const deleteClickHandler = (event) => {
    event.preventDefault();
    dispatch(
      deleteResourceThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: props.resourceType,
        id: props.itemID,
      })
    );
    dispatch(
      initDatasetThunk({ jwt: userData.signInUserSession.idToken.jwtToken })
    );
  };

  return (
    <>
      <a
        itemID={props.itemID}
        className="dmbookIcon"
        href=""
        onClick={deleteClickHandler}
      >
        <i className="fas fa-trash"></i>
      </a>
    </>
  );
};

export default DeleteIcon;
