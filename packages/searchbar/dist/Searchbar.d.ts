/**
 * Searchbar.tsx
 *
 * @description search bar for TMC react applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
interface IChange {
    target?: {
        value: any;
    };
}
interface ISearchbarProps {
    onSearch: (value: string) => void;
    onChange?: (evt: IChange) => void;
    placeholder?: string;
    autoFocus?: boolean;
}
/**
 * @description React Hook for using Searchbar CSS classes.
 */
export declare const useSearchbarStyles: (props?: any) => Record<"search" | "searchIcon" | "inputRoot" | "inputInput", string>;
/**
 * @description Searchbar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.onSearch The function to be called when searching. Triggered by an enter
 * keypress in the search input or a click on the search icon.
 * @param {Function} props.onChange An optional onChange handler to e.g. Filter results while the
 * user is typing.
 * @param {string} props.placeholder Placeholder text for the search input. Defaults to 'Search...'.
 * @param {boolean} props.autoFocus Whether or not the searchbar is automatically focused.
 * @param {Any} ref The React DOM ref, needed because MUI Tooltip requires it.
 * @returns {React.FunctionComponent} The Searchbar component.
 */
export declare const Searchbar: React.ForwardRefExoticComponent<ISearchbarProps & React.RefAttributes<unknown>>;
export default Searchbar;
