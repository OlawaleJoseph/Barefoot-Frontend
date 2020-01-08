import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {
  Form, Button, InputGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  faEnvelope, faUsers, faUserCircle, faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { newUser } from '../../actions/auth';

// eslint-disable-next-line no-shadow
const Register = ({ register }) => {
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

  const submitForm = async (values, { setSubmitting, resetForm }) => {
    await register(values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitForm}>
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
      }) => (
        <div className="bg-primary px-auto py-auto w-100 max-height">
          <div className="container-fluid form-wrapper row justify-content-center m-auto">
            <div className="form-image col-lg-6 hide" />
            <div className="form-container col-lg-6 col-md-12 py-5">
              <h3 className="text-center">NEW ACCOUNT?</h3>
              <Form className="mt-5 container p-3" onSubmit={handleSubmit}>
                <Form.Group controlId="firstName" className="p-3 mb-2" id="firstName-div">
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
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <Form.Label className="customLabel">First Name</Form.Label>
                  </InputGroup>
                  {touched.firstName && errors.firstName ? (
                    <Form.Text id="firstName-info" className="errorContainer">{errors.firstName}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="lastName" className="p-3 mb-2" id="lastName-div">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="input-icon">
                        <FontAwesomeIcon icon={faUsers} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="customInput"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      required
                    />
                    <Form.Label className="customLabel">Last Name</Form.Label>
                  </InputGroup>
                  {touched.lastName && errors.lastName ? (
                    <Form.Text id="lastName-info" className="errorContainer">{errors.lastName}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="email" className="p-3 mb-2" id="email-div">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="input-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="customInput"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <Form.Label className="customLabel">Email</Form.Label>
                  </InputGroup>
                  {touched.email && errors.email ? (
                    <Form.Text id="email-info" className="errorContainer">{errors.email}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="password" className="p-3 mb-2" id="password-div">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="input-icon">
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="customInput"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="password"
                      required
                    />
                    <Form.Label className="customLabel">Password</Form.Label>
                  </InputGroup>
                  {touched.password && errors.password ? (
                    <Form.Text id="password-info" className="errorContainer">{errors.password}</Form.Text>) : null}
                </Form.Group>
                <Button variant="primary" className="btn-block" type="submit" disabled={isSubmitting}> Register </Button>
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
  register: PropTypes.func.isRequired,
};

export default connect(null, { register: newUser })(Register);
