import CharacterForm from "./forms/CharacterForm";
import { addResourceThunk } from "../../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";

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
  };

  const editSubmitHandler = () => {
    console.log("Editing.");
    // TODO
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
