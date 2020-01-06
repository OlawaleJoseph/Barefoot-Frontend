import React from 'react';
import {
  Form, Button, InputGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  faEnvelope, faUsers, faUserCircle, faLock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <div className="bg-primary px-auto py-auto w-100 max-height">
    <div className="container-fluid form-wrapper row justify-content-center m-auto">
      <div className="form-image col-lg-6 hide" />
      <div className="form-container col-lg-6 col-md-12 py-5">
        <h3 className="text-center">NEW ACCOUNT?</h3>
        <Form className="mt-5 container p-3">
          <Form.Group controlId="first_name" className="p-3 mb-2">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="input-icon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                className="customInput"
                type="text"
                name="fname"
                required
              />
              <Form.Label className="customLabel">First Name</Form.Label>
            </InputGroup>
            <div id="firstname-info" className="form-message" />
          </Form.Group>
          <Form.Group controlId="last_name" className="p-3 mb-2">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="input-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                className="customInput"
                name="lname"
                type="text"
                required
              />
              <Form.Label className="customLabel">Last Name</Form.Label>
            </InputGroup>
            <div id="lastname-info" className="form-message" />
          </Form.Group>
          <Form.Group controlId="email" className="p-3 mb-2">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="input-icon">
                  <FontAwesomeIcon icon={faEnvelope} size="md" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                className="customInput"
                name="email"
                type="email"
                required
              />
              <Form.Label className="customLabel">Email</Form.Label>
            </InputGroup>
            <div id="email-info" className="form-message" />
          </Form.Group>
          <Form.Group controlId="password" className="p-3 mb-2">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="input-icon">
                  <FontAwesomeIcon icon={faLock} size="md" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                className="customInput"
                name="password"
                type="password"
                required
              />
              <Form.Label className="customLabel">Password</Form.Label>
            </InputGroup>
            <div id="password-info" className="form-message" />
          </Form.Group>
          <Button variant="primary" className="btn-block" type="submit" disabled> Register </Button>
        </Form>
        <div className="text-center">
                        Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  </div>
);
