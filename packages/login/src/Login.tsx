/**
 * login.tsx
 *
 * @description Login component for TMC applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, {
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ValidatingInput from '@indot/input';
import { useUser } from '@indot/usetmcuser';
import { useLocalState } from '@indot/state-hooks';

const throwIfEmpty = (s: string) => {
  if (!s) throw new Error('Empty input!');
  return s;
};

/**
 * @description Login form component.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.update Update function for the user state.
 * @returns {React.FunctionComponent} The login form component.
 */
export const Login = ({
  login,
  className = '',
}: {
  login: (userName: string, userPass: string) => void,
  className?: string,
}) => {
  const user = useUser();
  const [userName, setUserName] = useLocalState('crashmap/user', user.user_name);
  const [userPass, setUserPass] = useState('');
  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    login(userName, userPass);
  }, []);

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Grid
        container
        direction="column"
        alignContent="center"
        justify="center"
        spacing={1}
      >
        <Grid item>
          <ValidatingInput
            value={userName}
            setValue={setUserName}
            parse={throwIfEmpty}
          >
            {({
              onBlur,
              onChange,
              value,
              name,
            }) => (
                <TextField
                  autoFocus
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                  required
                  label="Name"
                />
              )}
          </ValidatingInput>
        </Grid>
        <Grid item>
          <ValidatingInput
            value={userPass}
            setValue={setUserPass}
            parse={throwIfEmpty}
          >
            {({
              onBlur,
              onChange,
              value,
              name,
            }) => (
                <TextField
                  onChange={onChange}
                  onBlur={onBlur}
                  type="password"
                  value={value}
                  name={name}
                  required
                  label="Password"
                />
              )}
          </ValidatingInput>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            style={{ position: 'relative', top: '25px' }}
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
