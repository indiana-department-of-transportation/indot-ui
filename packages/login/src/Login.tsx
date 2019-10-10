/**
 * login.tsx
 *
 * @description Login component for TMC applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Formik,
  Field,
  Form,
} from 'formik';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface ILoginFormState {
  user_name: string,
  user_pass: string,
}

const defaultFormState = {
  user_name: '',
  user_pass: '',
};

/**
 * @description Login form component.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.update Update function for the user state.
 * @returns {React.FunctionComponent} The login form component.
 */
export const Login = ({
  update,
  initialState,
}: {
  update: (userName: string, userPass: string) => void,
  initialState?: ILoginFormState,
}) => {
  const [userFormState, setUserFormState] = useState(initialState || defaultFormState);

  /**
   * @description State managing event handler for the login form.
   * @param {string} name The property name to update in the state object.
   * @returns {Function} Event handler, side-effective.
   */
  const updateFormState = (name: string) => (evt: Event) => setUserFormState({
    ...userFormState,
    [name]: (evt.target as HTMLInputElement).value,
  });

  // We'll use the form state instead of values
  const submitHandler = (
    _values: any,
    {
      setSubmitting,
    }: {
      setSubmitting: (state: boolean) => void,
    }) => {
    setSubmitting(true);
    const { user_name, user_pass } = userFormState;
    update(user_name, user_pass);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={defaultFormState}
      onSubmit={submitHandler}
    >
      {({ isSubmitting }: { isSubmitting: boolean }) => (
        <Form>
          <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
            spacing={1}
          >
            <Grid item>
              <Field
                component={TextField}
                name="user_name"
                pattern="^[a-zA-Z0-9]+@trafficwise\.org$"
                label="User Name"
                value={userFormState.user_name}
                onChange={updateFormState('user_name')}
                autoFocus
              />
            </Grid>
            <Grid item>
              <Field
                component={TextField}
                name="user_pass"
                type="password"
                label="Password"
                value={userFormState.user_pass}
                onChange={updateFormState('user_pass')}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disabled={isSubmitting}
                color="primary"
                style={{ position: 'relative', top: '25px' }}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

Login.propTypes = {
  update: PropTypes.func.isRequired,
};

export default Login;
