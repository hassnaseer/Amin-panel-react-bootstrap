import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const MyForm = () => {

    const [toggle, setToggle] = useState(false)
  const initialValues = {
    toggle: false,
    input: ''
  };
const handlechnage =()=>{
    setToggle(!toggle)
}
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="container">
      <h1>My Form</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-3">
          <BootstrapSwitchButton
            checked={false}
            size="xs"
            onChange={handlechnage}
        />
          </div>
          <div className="mb-3">
            <label htmlFor="input" className="form-label">
              Input Field
            </label>
            <Field
              type="text"
              id="input"
              name="input"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
