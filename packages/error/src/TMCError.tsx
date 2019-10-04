/**
 * TMCError.tsx
 *
 * @description Error header for the ITS Ticketing project.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React from 'react';
import PropTypes from 'prop-types';

import logger from '@indot/tmclogger';

const defaultErrorMessage = 'An error has occured please reload.';

/**
 * @description Error page for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {Error} props.error The error that caused the error page render.
 * @param {string} props.message The message to display on the error page.
 * @returns {React.FunctionComponent} The Error component.
 */
export const TMCError = ({
  error = new Error(defaultErrorMessage),
  message = defaultErrorMessage,
}) => {
  logger.error(error);
  return (
    <React.Fragment>
      <h2>Error!</h2>
      <p>{message}</p>
    </React.Fragment>
  );
};

TMCError.defaultProps = {
  error: new Error(defaultErrorMessage),
  message: defaultErrorMessage,
};

TMCError.propTypes = {
  error: PropTypes.instanceOf(Error),
  message: PropTypes.string,
};

export default TMCError;
