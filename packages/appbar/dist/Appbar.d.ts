/**
 * appbar.tsx
 *
 * @description AppBar header for the ITS Ticketing project.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { IPojo } from '@jasmith79/ts-utils';
interface IAppbarUser extends IPojo {
    userName: string;
}
interface IPlainAppBarProps {
    title: string | ReactNode;
    Searchbar?: ReactNode;
}
interface ILoginAppbarProps extends IPlainAppBarProps {
    Account: ReactNode;
    user: IAppbarUser;
    logoff: () => void;
}
/**
 * @description A simple app bar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
export declare const TMCAppbar: {
    ({ title, Searchbar, }: IPlainAppBarProps): JSX.Element;
    defaultProps: {
        Searchbar: undefined;
    };
    propTypes: {
        title: PropTypes.Validator<string>;
        Searchbar: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * @description An app bar for TMC Applications with login and account management.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @param {Object} props.user The logged in user.
 * @param {Function} props.logoff The logoff function.
 * @param {React.Component} props.Account An optional account management component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
export declare const TMCUserAppbar: {
    ({ title, Searchbar, user, logoff, Account, }: ILoginAppbarProps): JSX.Element;
    defaultProps: {
        user: {
            userName: string;
        };
        logoff: (..._args: any[]) => void;
        Account: JSX.Element;
    };
    propTypes: {
        title: PropTypes.Validator<string>;
        Searchbar: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        user: PropTypes.Requireable<PropTypes.InferProps<{
            userName: PropTypes.Requireable<string>;
        }>>;
        logoff: PropTypes.Requireable<(...args: any[]) => any>;
        Account: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default TMCAppbar;
