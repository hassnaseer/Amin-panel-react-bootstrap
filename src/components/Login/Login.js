import React from "react";
import { Formik, Field, Form } from 'formik';

const Login = () => {
    const initialValues = {
      email: '',
      password: ''
    };
  
    const handleSubmit = (values) => {
      // Handle form submission here
      console.log(values);
    };
  
    return (
      <div className="container">
        <h1>Login</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
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
              Login
            </button>
          </Form>
        </Formik>
      </div>
    );
  };
  
  export default Login;