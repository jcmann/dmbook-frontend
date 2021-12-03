import { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";

import { changeEditingStatuses } from "../../../../redux/dataSlice";

const required = (value) => (value ? undefined : "Required");

const EncounterForm = (props) => {
  const dispatch = useDispatch();
  const encountersData = useSelector((state) => state.data.encounters);
  const currentlyEditing = useSelector((state) => state.data.editResourceID);

  // An immediately invoked function to assign initial form values based on state
  let formData = (() => {
    if (encountersData) {
      return encountersData.filter(
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
