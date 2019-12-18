/**
 * TMCLeafletBase.tsx
 *
 * @description Convenience leaflet component for TMC React applications. Base for
 * marker, polyline components.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description The TMC leaflet base component.
 *
 * @param [props] The destructured props object.
 * @param props.Component {Function} The function to generate the displayed component.
 * @param props.componentProps {Object} The props to pass to the rendered component.
 * @param props.tooltip {String|React.ReactNode} Optional tooltip node/string.
 * @param props.children {React.ReactNode} The React children.
 * @returns {React.FunctionComponent} The rendered component.
 */
export declare const TMCLeafletBase: {
    <P extends {}>({ Component, componentProps, tooltip, children, }: {
        Component: new (props: any) => React.Component<{}, {}, any>;
        componentProps?: P | undefined;
        tooltip?: React.ReactNode;
        children?: React.ReactNode;
    }): JSX.Element;
    propTypes: {
        Component: PropTypes.Validator<(...args: any[]) => any>;
        componentProps: PropTypes.Requireable<object>;
        tooltip: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    defaultProps: {
        componentProps: undefined;
        tooltip: undefined;
        children: undefined;
    };
};
export default TMCLeafletBase;
