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
interface IAppBarProps {
    title: string | ReactNode;
    Searchbar: ReactNode;
    Account: ReactNode;
}
/**
 * @description App bar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The header title.
 * @param {React.Component} props.Searchbar An optional searchbar component.
 * @param {React.Component} props.Account An optional account management component.
 * @returns {React.FunctionComponent} The Appbar component.
 */
export declare const TMCAppBar: {
    ({ title, Searchbar, Account }: IAppBarProps): JSX.Element;
    defaultProps: {
        Searchbar: null;
        Account: null;
    };
    propTypes: {
        title: PropTypes.Validator<string>;
        Searchbar: PropTypes.Requireable<PropTypes.ReactElementLike>;
        Account: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
export default TMCAppBar;
