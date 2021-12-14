import EncounterForm from "./forms/EncounterForm";
import {
  addResourceThunk,
  changeEditingStatuses,
  editResourceThunk,
  initDatasetThunk,
} from "../../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../../../redux/displaySlice";

/**
 * This is a wrapper component for the encounters form that defines handler logic for the form.
 */
const AddEditEncounter = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  const h2Text =
    props.formType === "add" ? "Add A New Encounter" : "Edit Encounter";

  const addNewSubmitHandler = async (values) => {
    console.log("Submitting new encounter....");
    console.log(values);
    await dispatch(
      addResourceThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: "encounters",
        formData: values,
      })
    );
    await dispatch(
      changeEditingStatuses({ isEditing: false, editResourceID: 0 })
    );
    dispatch(changeCurrentContent({ newContent: "encounters" })); // TODO polish this
    dispatch(
      initDatasetThunk({ jwt: userData.signInUserSession.idToken.jwtToken })
    );
  };

  const editSubmitHandler = async (values) => {
    console.log("Editing.");
    console.log(values);
    dispatch(
      editResourceThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: "encounters",
        formData: values,
      })
    );
    await dispatch(
      changeEditingStatuses({ isEditing: false, editResourceID: 0 })
    );
    dispatch(changeCurrentContent({ newContent: "encounters" })); // TODO polish this
    dispatch(
      initDatasetThunk({ jwt: userData.signInUserSession.idToken.jwtToken })
    );
  };

  return (
    <>
      <h2>{h2Text}</h2>
      <EncounterForm
        submitHandler={
          props.formType === "add" ? addNewSubmitHandler : editSubmitHandler
        }
      />
    </>
  );
};

export default AddEditEncounter;
