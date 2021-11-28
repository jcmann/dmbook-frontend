import { useDispatch, useSelector } from "react-redux";

import { deleteResourceThunk } from "../../redux/dataSlice";

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
