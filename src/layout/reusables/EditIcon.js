import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../../redux/displaySlice";
import {
  editResourceThunk,
  changeEditingStatuses,
  initDatasetThunk,
} from "../../redux/dataSlice";

import "./EditIcon.css";
import Auth from "@aws-amplify/auth";

/**
 * Expects props itemID and resourceType
 */
const EditIcon = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  const editClickHandler = async (event) => {
    event.preventDefault();
    dispatch(
      changeCurrentContent({ newContent: `${props.resourceType}:edit` })
    );
    dispatch(
      changeEditingStatuses({ isEditing: true, editResourceID: props.itemID })
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
