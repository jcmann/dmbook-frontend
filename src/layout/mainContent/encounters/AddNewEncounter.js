import EncounterForm from "./forms/EncounterForm";
import {
  addResourceThunk,
  changeEditingStatuses,
  editResourceThunk,
  initDatasetThunk,
} from "../../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../../../redux/displaySlice";

const AddNewEncounter = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  const h1Text =
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
      <h1>Add New Encounter</h1>
      <EncounterForm
        submitHandler={
          props.formType === "add" ? addNewSubmitHandler : editSubmitHandler
        }
      />
    </>
  );
};

export default AddNewEncounter;
