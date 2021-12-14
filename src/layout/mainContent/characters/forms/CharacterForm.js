import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeEditingStatuses } from "../../../../redux/dataSlice";
import "../../../../App.css";

const required = (value) => (value ? undefined : "Required");

/**
 * This form handles both editing and adding new characters. It relies on state to determine if the form is being
 * rendered to edit an existing resource or a new resource by checking the stat's editResourceID.
 */
const CharacterForm = (props) => {
  const dispatch = useDispatch();
  const resourceData = useSelector((state) => state.data.characters);
  const currentlyEditing = useSelector((state) => state.data.editResourceID);

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
  });

  /**
   * Fields for MVP: Name, Level, Class, Race, Health, AC, Primary Stats
   */

  return (
    <div>
      <Form
        onSubmit={props.submitHandler}
        initialValues={{ ...formData }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="level" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Level:</label>
                  <input
                    {...input}
                    type="number"
                    placeholder="Level"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="race" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Race:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Ex: Aarakocra"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="characterClass" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Class:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Ex: Barbarian"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <fieldset className="container flex-wrap m-auto">
              <legend>Stats</legend>
              <div className="row">
                <Field name="strength">
                  {({ input, meta }) => (
                    <div className="form-group characterStat col-sm-3">
                      <label>Strength:</label>
                      <input
                        {...input}
                        type="number"
                        className="form-control"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="dexterity">
                  {({ input, meta }) => (
                    <div className="form-group characterStat col-sm-3">
                      <label>Dexterity:</label>
                      <input
                        {...input}
                        type="number"
                        className="form-control"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="constitution">
                  {({ input, meta }) => (
                    <div className="form-group characterStat col-sm-3">
                      <label>Constitution:</label>
                      <input
                        {...input}
                        type="number"
                        className="form-control"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="intelligence">
                  {({ input, meta }) => (
                    <div className="form-group characterStat col-sm-3">
                      <label>Intelligence:</label>
                      <input
                        {...input}
                        type="number"
                        className="form-control"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="wisdom">
                  {({ input, meta }) => (
                    <div className="form-group characterStat col-sm-3">
                      <label>Wisdom:</label>
                      <input
                        {...input}
                        type="number"
                        className="form-control"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="charisma">
                  {({ input, meta }) => (
                    <div className="form-group characterStat col-sm-3">
                      <label>Charisma:</label>
                      <input
                        {...input}
                        type="number"
                        className="form-control"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
            </fieldset>
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

export default CharacterForm;
