/**
 * PageContent.js
 *
 * @description A container component for page content.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import { ReactNode } from 'react';
import PropTypes from 'prop-types';
interface IPageContentProps {
    title: string;
    children: ReactNode;
    scrollable?: boolean;
    className?: string;
}
export declare const usePageContentStyles: (props?: any) => Record<"title" | "scrollable" | "card" | "titleContainer", string>;
/**
 * @description Page content container component.
 *
 * @param {Object} [props] The destructured props object.
 * @param {string} props.title The page title.
 * @param {React.ReactNode} props.children The child components.
 * @param {boolean} props.scrollable Whether the container is scrollable.
 * @returns {React.FunctionComponent} The container component.
 */
export declare const PageContent: {
    ({ title, children, scrollable, className, }: IPageContentProps): JSX.Element;
    defaultProps: {
        scrollable: boolean;
    };
    propTypes: {
        title: PropTypes.Validator<string>;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        scrollable: PropTypes.Requireable<boolean>;
    };
};
export default PageContent;
