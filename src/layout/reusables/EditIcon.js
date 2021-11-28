import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../../redux/displaySlice";
import { editResourceThunk } from "../../redux/dataSlice";

import "./EditIcon.css";

/**
 * Expects props itemID and resourceType
 */
const EditIcon = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  const editClickHandler = (event) => {
    event.preventDefault();
    dispatch(
      changeCurrentContent({ newContent: `${props.resourceType}:edit` })
    );
  };

  return (
    <>
      <a className="dmbookIcon" href="" onClick={editClickHandler}>
        <i className="fas fa-edit"></i>
      </a>
    </>
  );
};

export default EditIcon;
