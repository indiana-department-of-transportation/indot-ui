/**
 * login.tsx
 *
 * @description Login component for TMC applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * @description Login form component.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.update Update function for the user state.
 * @returns {React.FunctionComponent} The login form component.
 */
export declare const Login: {
    ({ login, className, }: {
        login: (userName: string, userPass: string) => void;
        className?: string | undefined;
    }): JSX.Element;
    propTypes: {
        login: PropTypes.Validator<(...args: any[]) => any>;
    };
};
export default Login;
