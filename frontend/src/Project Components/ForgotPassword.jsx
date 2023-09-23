import { Formik, Form } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import FormikInput from '../Formik/FormikInput';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './nakhau.css'

const ForgotPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.get('http://localhost:8000/users/forgot-password', { params: values });
      navigate('/forgot-password-verification');
    } catch (error) {
      console.log('Unable to submit:', error);
    } 
  };

  const validationSchema = yup.object({
    email: yup.string().required('Email is required. '),
  });

  return (
    <div className="form-container">
      <h1 className="form-title">Forgot Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form>
            <p>We will send an email for verification. Kindly verify and continue to reset your password.</p>
            <FormikInput
                name="email" 
                label="Email: "
                type="email"
                required={true}
                className="form-input"
              />
           
            <button type="submit"className="form-button">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;


