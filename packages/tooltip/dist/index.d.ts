/**
 * index.tsx
 *
 * @description Wraps Material-UI tooltip components.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import { HTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TooltipProps } from '@material-ui/core/Tooltip';
interface TooltipTitleProps<T> extends HTMLAttributes<T> {
    content: ReactNode;
}
export declare const useTooltipStyles: (props?: any) => Record<"title", string>;
/**
 * @description Title element for tooltips.
 *
 * @param [props] The destructured React props.
 * @param props.content The contents of the tooltip.
 * @returns The TooltipTitle component.
 */
export declare const TooltipTitle: {
    (props: TooltipTitleProps<HTMLDivElement>): JSX.Element;
    propTypes: {
        content: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
/**
 * @description The TMC INDOT UI Tooltip component.
 *
 * @param [props] The destructured React props.
 * @param props.title The title for the tooltip. If simply a string, wrapped in a TooltipTitle.
 * @param props.children The React children to be displayed as the tooltip contents.
 * @returns The Tooltip component.
 */
export declare const Tooltip: {
    ({ title, children, ...rest }: TooltipProps): JSX.Element;
    propTypes: {
        title: PropTypes.Validator<PropTypes.Requireable<PropTypes.ReactNodeLike>>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default Tooltip;
