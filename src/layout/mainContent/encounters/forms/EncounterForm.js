import { Field, Form } from 'react-final-form';

const required = (value) => (value ? undefined : 'Required');

const EncounterForm = (props) => {
  let formData = {};

  const submitHandler = () => {
    console.log('Submitting new encounter....');
    // TODO connect to API
  };

  return (
    <div>
      <Form
        onSubmit={submitHandler}
        initialValues={formData}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
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
                <option value="halfling">Character 1</option>
                <option value="elf">Character 2</option>
                <option value="dragonborn">Character 3</option>
              </Field>
            </div>
            <Field name="monsters" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Monsters:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Aboleth"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="hitPoints" component="textarea" validate={required}>
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
      ></Form>
    </div>
  );
};

export default EncounterForm;