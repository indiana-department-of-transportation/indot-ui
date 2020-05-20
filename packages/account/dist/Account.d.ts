/**
 * Account.js
 *
 * @description Account icon and menu for TMC react applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * @description React Hook for generating classes used by the Account component.
 */
export declare const useAccountStyles: (props?: any) => Record<"icon", string>;
/**
 * @description An account management component.
 *
 * @param {Object} [props] The props object.
 * @param {Function} props.logoff Function to log the user off.
 * @returns {React.FunctionComponent} The account management component.
 */
export declare const Account: {
    ({ logoff, className, }: {
        logoff: () => void;
        className?: string | undefined;
    }): JSX.Element;
    propTypes: {
        logoff: PropTypes.Validator<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
    };
};
export default Account;
