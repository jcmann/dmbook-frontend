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
 * The Edit icon does not have anything to do with actual requests, but instead just switches the content
 * being displayed to the edit form, which then pulls its data directly from state. The EditIcon does change the
 * editing statuses data, namely the isEditing and editResourceID, which is the state the form itself checks.
 */
const EditIcon = (props) => {
  const dispatch = useDispatch();

  // Dispatches actions to correctly display editing content, the rest of which is handled by the form system
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
