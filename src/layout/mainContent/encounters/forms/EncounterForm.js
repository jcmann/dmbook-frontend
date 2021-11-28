import { useState } from "react";
import { Field, Form } from "react-final-form";
import Select from "react-select";

const required = (value) => (value ? undefined : "Required");

const mockMonsters = [
  { value: "Aboleth", label: "Aboleth" },
  { value: "Acolyte", label: "Acolyte" },
  { value: "Ancient Red Dragon", label: "Ancient Red Dragon" },
  { value: "Bandit", label: "Bandit" },
  { value: "Bat", label: "Bat" },
];

const EncounterForm = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  let formData = {};

  const submitHandler = () => {
    console.log("Submitting new encounter....");
    // TODO connect to API
  };

  return (
    <div>
      <Form
        onSubmit={submitHandler}
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
            {/*<div className="form-group">*/}
            {/*  <label>Characters:</label>*/}
            {/*  <Field*/}
            {/*    name="characters"*/}
            {/*    component="select"*/}
            {/*    className="form-control"*/}
            {/*    multiple*/}
            {/*  >*/}
            {/*    <option value="halfling">Character 1</option>*/}
            {/*    <option value="elf">Character 2</option>*/}
            {/*    <option value="dragonborn">Character 3</option>*/}
            {/*  </Field>*/}
            {/*</div>*/}
            {/*<Field name="monsters" validate={required}>*/}
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
