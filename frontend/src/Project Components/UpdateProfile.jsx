import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { getLoginInfo } from '../utils/loginInfo';

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    name: '',
    age: '',
  });

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const result = await axios({
        url: 'http://localhost:8000/users/my-profile',
        method: 'get',
        headers: {
          Authorization: `Bearer ${getLoginInfo()?.token}`
        }
      });
      setInitialValues({
        name: result.data.result.name,
        age: result.data.result.age,
      });
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  };

  const handleSubmit = async (values) => {
    try {
      await axios({
        url: 'http://localhost:8000/users/update-my-profile',
        method: 'patch',
        data: {
          name: values.name,
          age: values.age,
        },
        headers: {
          Authorization: `Bearer ${getLoginInfo()?.token}`
        }
      });
      navigate('/my-profile');
    } catch (error) {
      console.log('Unable to update');
    }
  };

  return (
    <div style={{ border: '2px solid lightblue', marginTop: '90px' }}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
        <Form>
        <label htmlFor="name">User name: </label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
          <br />
        <label htmlFor="name">Age: </label>
          <Field type="number" id="age" name="age" />
          <ErrorMessage name="age" component="div" />
          <br />

          <button type="submit" style={{ cursor: 'pointer' }}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateProfile;
