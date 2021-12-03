import CharacterForm from "./forms/CharacterForm";
import {
  addResourceThunk,
  changeEditingStatuses,
  editResourceThunk,
} from "../../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentContent } from "../../../redux/displaySlice";

const AddNewCharacter = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  const h1Text =
    props.formType === "add" ? "Add A New Character" : "Edit Character";

  const addNewSubmitHandler = async (values) => {
    console.log("Submitting new character....");
    console.log(values);
    dispatch(
      addResourceThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: "characters",
        formData: values,
      })
    );
    dispatch(changeEditingStatuses({ isEditing: false, editResourceID: 0 }));
    dispatch(changeCurrentContent({ newContent: "characters" })); // TODO polish this
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
  };

  return (
    <>
      <h1>{h1Text}</h1>
      <CharacterForm
        submitHandler={
          props.formType === "add" ? addNewSubmitHandler : editSubmitHandler
        }
      />
    </>
  );
};

export default AddNewCharacter;
