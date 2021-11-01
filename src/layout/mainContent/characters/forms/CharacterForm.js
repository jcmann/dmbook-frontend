import { Field, Form } from 'react-final-form';

const required = (value) => (value ? undefined : 'Required');

const CharacterForm = (props) => {
  let formData = {};

  /**
   * Fields: Name, Level, Class, Race, Health, AC, Primary Stats
   */

  // TODO add the stats once basic form is set up

  const submitHandler = () => {
    console.log('Submitting new character....');
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
                <div>
                  <label>Name:</label>
                  <input {...input} type="text" placeholder="Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="level" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Level:</label>
                  <input {...input} type="text" placeholder="Level" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <label>Class:</label>
              <Field name="characterClass" component="select">
                <option value="halfling">Halfling</option>
                <option value="elf">Elf</option>
                <option value="dragonborn">Dragonborn</option>
              </Field>
            </div>
            <Field name="race" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Race:</label>
                  <input {...input} type="text" placeholder="Halfling" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="hitPoints" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>HP:</label>
                  <input {...input} type="text" placeholder="Hit Points" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="armorClass" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>AC:</label>
                  <input {...input} type="text" placeholder="Armor Class" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
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

export default CharacterForm;
