import React from "react";
import { Formik, Field, Form } from 'formik';

const Signup = () => {
    const initialValues = {
      name: '',
      email: '',
      password: ''
    };
  
    const handleSubmit = (values) => {
      // Handle form submission here
      console.log(values);
    };
  
    return (
      <div className="container">
        <h1>Signup</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </Form>
        </Formik>
      </div>
    );
  };
  
  export default Signup;
  