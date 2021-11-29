import { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import { changeEditingStatuses } from "../../../../redux/dataSlice";
import { USERS_ENDPOINT } from "../../../../config/config";

const required = (value) => (value ? undefined : "Required");

const mockMonsters = [
  { value: "Aboleth", label: "Aboleth" },
  { value: "Acolyte", label: "Acolyte" },
  { value: "Ancient Red Dragon", label: "Ancient Red Dragon" },
  { value: "Bandit", label: "Bandit" },
  { value: "Bat", label: "Bat" },
];

const EncounterForm = (props) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const userData = useSelector((state) => state.login.authInfo.user);
  const resourceData = useSelector((state) => state.data.resources);
  const currentlyEditing = useSelector((state) => state.data.editResourceID);

  let characterData = []; // should the uE just be an IIF?

  // Runs when component first mounts
  useEffect(async () => {
    // query database for characters belonging to this user
    let URL =
      USERS_ENDPOINT +
      userData.signInUserSession.idToken.jwtToken +
      "/characters";
    characterData = await fetch(URL)
      .then((data) => {
        return data.json();
      })
      .then((dataJSON) => {
        console.log("USER CHARACTERS: ");
        console.log(dataJSON);
        return dataJSON;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // An immediately invoked function to assign initial form values based on state
  let formData = (() => {
    if (resourceData) {
      return resourceData.filter(
        (current) => current.id === currentlyEditing
      )[0];
    }
  })();

  // Parallel to componentWillUnmount
  // Runs when component is unmounting to reset the currently editing stats
  useEffect(() => {
    return () => {
      dispatch(changeEditingStatuses({ isEditing: false, editResourceID: 0 }));
    };
  }, []);

  return (
    <div>
      <Form
        onSubmit={props.submitHandler}
        initialValues={formData}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Title:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Title"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="difficulty" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Difficulty:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Level"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="form-group">
              <label>Characters:</label>
              <Field
                name="characters"
                component="select"
                className="form-control"
                multiple
              >
                {characterData.map((current) => {
                  return <option value={current.name}>{current.name}</option>;
                })}
              </Field>
            </div>
            {/*<Field name="monsters">*/}
            {/*  {({ input, meta }) => (*/}
            {/*    <div className="form-group">*/}
            {/*      <label>Monsters:</label>*/}
            {/*      <Select*/}
            {/*        defaultValue={selectedOption}*/}
            {/*        onChange={setSelectedOption}*/}
            {/*        options={mockMonsters}*/}
            {/*        isMulti={true}*/}
            {/*        isSearchable={true}*/}
            {/*      />*/}
            {/*      {meta.error && meta.touched && <span>{meta.error}</span>}*/}
            {/*    </div>*/}
            {/*  )}*/}
            {/*</Field>*/}
            <Field name="description" component="textarea" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Description:</label>
                  <textarea
                    {...input}
                    type="textarea"
                    placeholder="Hit Points"
                    className="form-control"
                    rows="4"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="form-group">
              <button
                type="submit"
                disabled={submitting || pristine}
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                className="btn btn-link"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default EncounterForm;
