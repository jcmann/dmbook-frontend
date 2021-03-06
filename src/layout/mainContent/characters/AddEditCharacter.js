import CharacterForm from "./forms/CharacterForm";
import {
  addResourceThunk,
  changeEditingStatuses,
  editResourceThunk,
  initDatasetThunk,
} from "../../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../../../redux/displaySlice";

/**
 * This is a wrapper component for the characters form that defines handler logic for the form.
 */
const AddEditCharacter = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  const h2Text =
    props.formType === "add" ? "Add A New Character" : "Edit Character";

  const addNewSubmitHandler = async (values) => {
    console.log("Submitting new character....");
    console.log(values);
    await dispatch(
      addResourceThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: "characters",
        formData: values,
      })
    );
    dispatch(changeEditingStatuses({ isEditing: false, editResourceID: 0 }));
    dispatch(changeCurrentContent({ newContent: "characters" })); // TODO polish this
    dispatch(
      initDatasetThunk({ jwt: userData.signInUserSession.idToken.jwtToken })
    );
  };

  const editSubmitHandler = (values) => {
    console.log("Editing.");
    console.log(values);
    dispatch(
      editResourceThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: "characters",
        formData: values,
      })
    );
    dispatch(changeEditingStatuses({ isEditing: false, editResourceID: 0 }));
    dispatch(changeCurrentContent({ newContent: "characters" })); // TODO polish this
    dispatch(
      initDatasetThunk({ jwt: userData.signInUserSession.idToken.jwtToken })
    );
  };

  return (
    <>
      <h2>{h2Text}</h2>
      <CharacterForm
        submitHandler={
          props.formType === "add" ? addNewSubmitHandler : editSubmitHandler
        }
      />
    </>
  );
};

export default AddEditCharacter;
