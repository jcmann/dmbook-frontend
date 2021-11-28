import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";

import { addResourceThunk } from "../../../../redux/dataSlice";

const required = (value) => (value ? undefined : "Required");

const CharacterForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);

  let formData = {};

  /**
   * Fields for MVP: Name, Level, Class, Race, Health, AC, Primary Stats
   */

  const submitHandler = async (values) => {
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

  return (
    <div>
      <Form
        onSubmit={submitHandler}
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
                    type="text"
                    placeholder="Level"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="form-group">
              <label>Race:</label>
              <Field
                name="characterClass"
                component="select"
                className="form-control"
              >
                <option value="halfling">Halfling</option>
                <option value="elf">Elf</option>
                <option value="dragonborn">Dragonborn</option>
              </Field>
            </div>
            <Field name="race" validate={required}>
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Class:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Barbarian"
                    className="form-control"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {/*<Field name="hitPoints" validate={required}>*/}
            {/*  {({ input, meta }) => (*/}
            {/*    <div className="form-group">*/}
            {/*      <label>HP:</label>*/}
            {/*      <input*/}
            {/*        {...input}*/}
            {/*        type="text"*/}
            {/*        placeholder="Hit Points"*/}
            {/*        className="form-control"*/}
            {/*      />*/}
            {/*      {meta.error && meta.touched && <span>{meta.error}</span>}*/}
            {/*    </div>*/}
            {/*  )}*/}
            {/*</Field>*/}
            {/*<Field name="armorClass" validate={required}>*/}
            {/*  {({ input, meta }) => (*/}
            {/*    <div className="form-group">*/}
            {/*      <label>AC:</label>*/}
            {/*      <input*/}
            {/*        {...input}*/}
            {/*        type="text"*/}
            {/*        placeholder="Armor Class"*/}
            {/*        className="form-control"*/}
            {/*      />*/}
            {/*      {meta.error && meta.touched && <span>{meta.error}</span>}*/}
            {/*    </div>*/}
            {/*  )}*/}
            {/*</Field>*/}
            <fieldset>
              <Field name="strength" validate={required}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label>Strength:</label>
                    <input {...input} type="number" className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="dexterity" validate={required}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label>Dexterity:</label>
                    <input {...input} type="number" className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="constitution" validate={required}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label>Constitution:</label>
                    <input {...input} type="number" className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="intelligence" validate={required}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label>Intelligence:</label>
                    <input {...input} type="number" className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="wisdom" validate={required}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label>Wisdom:</label>
                    <input {...input} type="number" className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="charisma" validate={required}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label>Charisma:</label>
                    <input {...input} type="number" className="form-control" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
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
