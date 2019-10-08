/**
 * TMCError.tsx
 *
 * @description Error header for the ITS Ticketing project.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * @description Error page for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {Error} props.error The error that caused the error page render.
 * @param {string} props.message The message to display on the error page.
 * @returns {React.FunctionComponent} The Error component.
 */
export declare const TMCError: {
    ({ error, message, }: {
        error?: Error | undefined;
        message?: string | undefined;
    }): JSX.Element;
    defaultProps: {
        error: Error;
        message: string;
    };
    propTypes: {
        error: PropTypes.Requireable<Error>;
        message: PropTypes.Requireable<string>;
    };
};
export default TMCError;
