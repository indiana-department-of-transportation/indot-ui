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
interface ILoginFormState {
    user_name: string;
    user_pass: string;
}
/**
 * @description Login form component.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.update Update function for the user state.
 * @returns {React.FunctionComponent} The login form component.
 */
export declare const Login: {
    ({ update, initialState, }: {
        update: (userName: string, userPass: string) => void;
        initialState?: ILoginFormState | undefined;
    }): JSX.Element;
    propTypes: {
        update: PropTypes.Validator<(...args: any[]) => any>;
    };
};
export default Login;
