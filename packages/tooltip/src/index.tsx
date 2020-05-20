/**
 * index.tsx
 *
 * @description Wraps Material-UI tooltip components.
 *
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, {
  HTMLAttributes,
  ReactNode,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import MUITooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

interface TooltipTitleProps<T> extends HTMLAttributes<T> {
  content: ReactNode,
}

export const useTooltipStyles = makeStyles({
  title: {
    fontSize: '1.5em',
  },
});

/**
 * @description Title element for tooltips.
 *
 * @param [props] The destructured React props.
 * @param props.content The contents of the tooltip.
 * @returns The TooltipTitle component. 
 */
export const TooltipTitle = (props: TooltipTitleProps<HTMLDivElement>) => {
  const classes = useTooltipStyles();
  const descendantProps = { ...props };
  descendantProps.className = clsx(
    classes.title,
    descendantProps.className || '',
  );

  return <div {...descendantProps}>{props.content}</div>;
};

TooltipTitle.propTypes = {
  content: PropTypes.node.isRequired,
};

/**
 * @description The TMC INDOT UI Tooltip component.
 *
 * @param [props] The destructured React props.
 * @param props.title The title for the tooltip. If simply a string, wrapped in a TooltipTitle.
 * @param props.children The React children to be displayed as the tooltip contents.
 * @returns The Tooltip component.
 */
export const Tooltip = ({
  title,
  children,
  ...rest
}: TooltipProps) => {
  const titleElem = typeof title === 'string'
    ? <TooltipTitle content={title} />
    : title;

  const contentElem = typeof children === 'string'
    ? <Button>{children}</Button>
    : children;

  return (
    <MUITooltip {...rest} title={titleElem}>
      {contentElem}
    </MUITooltip>
  );
};

Tooltip.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.node,
};

export default Tooltip;
