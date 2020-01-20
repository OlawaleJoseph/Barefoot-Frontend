import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {
  Form, Button, InputGroup,
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import {
  faEnvelope, faUsers, faUserCircle, faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { newUser } from '../../actions/auth';

const Register = ({ register, isRegistered }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'First name must have at least 3 characters')
      .max(30, 'First name cannot exceed 30 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(3, 'Last name must have at least 3 characters')
      .max(30, 'Last name cannot exceed 30 characters')
      .required('Last name is required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must have at least 8 characters')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!.@$%^&*-]).{8,}$/, 'Password must include an uppercase, lowercase, digit and special character')
      .required('Password is required'),
  });

  const submitForm = async (values, { setSubmitting }) => {
    setSubmitting(false);
    await register(values);
  };
  if (isRegistered) {
    return <Redirect to="/emailVerification" />;
  }
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitForm}>
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
      }) => (
        <div className="bg-primary px-auto py-auto w-100 max-height form-container-bg">
          <div className="overlay w-100 max-height" />
          <div className="container-fluid form-wrapper row justify-content-center m-auto">
            <div className="form-image col-lg-6 hide" />
            <div className="form-container col-lg-6 col-md-12 py-3">
              <h3 className="text-center">NEW ACCOUNT?</h3>
              <Form className="mt-2 container p-3" onSubmit={handleSubmit}>
                <Form.Group controlId="firstName" className="py-2 px-2 mb-3" id="firstName-div">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="input-icon">
                        <FontAwesomeIcon icon={faUserCircle} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="customInput"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  {touched.firstName && errors.firstName ? (
                    <Form.Text id="firstName-info" className="errorContainer">{errors.firstName}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="lastName" className="py-2 px-2 mb-3" id="lastName-div">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="input-icon">
                        <FontAwesomeIcon icon={faUsers} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="customInput"
                      name="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                    />
                  </InputGroup>
                  {touched.lastName && errors.lastName ? (
                    <Form.Text id="lastName-info" className="errorContainer">{errors.lastName}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="email" className="py-2 px-2 mb-3" id="email-div">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="input-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="customInput"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  {touched.email && errors.email ? (
                    <Form.Text id="email-info" className="errorContainer">{errors.email}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="password" className="py-2 px-2 mb-3" id="password-div">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="input-icon">
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="customInput"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="password"
                    />
                  </InputGroup>
                  {touched.password && errors.password ? (
                    <Form.Text id="password-info" className="errorContainer">{errors.password}</Form.Text>) : null}
                </Form.Group>
                <Button variant="primary" className="btn-block mt-4" type="submit" disabled={isSubmitting}> Register </Button>
              </Form>
              <div className="text-center">
                  Already have an account?
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

Register.propTypes = {
  isRegistered: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateTpProps = (state) => ({
  isRegistered: state.auth.isRegistered,
});

export default connect(mapStateTpProps, { register: newUser })(Register);
