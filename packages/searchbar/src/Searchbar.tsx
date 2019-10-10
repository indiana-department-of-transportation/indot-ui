/**
 * Searchbar.tsx
 *
 * @description search bar for TMC react applications.
 * @author jarsmith@indot.in.gov
 * @license MIT
 * @copyright INDOT, 2019
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import SearchIcon from '@material-ui/icons/Search';

interface IKeyCode {
  keyCode?: number,
  key?: string,
}

interface IChange {
  target?: {
    value: any,
  },
}

interface ISearchbarProps {
  onSearch: (value: string) => void,
  onChange?: (evt: IChange) => void,
  placeholder?: string,
}

const noop = (...args: any[]) => {};

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

/**
 * @description Searchbar for TMC Applications.
 * @param {Object} [props] The destructured props object.
 * @param {Function} props.onSearch The function to be called when searching. Triggered by an enter
 * keypress in the search input or a click on the search icon.
 * @param {Function} props.onChange An optional onChange handler to e.g. Filter results while the
 * user is typing.
 * @param {string} props.placeholder Placeholder text for the search input. Defaults to 'Search...'.
 * @param {Any} ref The React DOM ref, needed because MUI Tooltip requires it.
 * @returns {React.FunctionComponent} The Searchbar component.
 */
export const Searchbar = React.forwardRef(({
  onSearch,
  onChange = noop,
  placeholder = 'Search…',
  // eslint-disable-next-line no-unused-vars
}: ISearchbarProps, ref) => {
  const classes = useStyles();
  const [currentValue, setValue] = useState('');
  const onKeyPress = (evt: IKeyCode) => {
    if (evt.keyCode === 13 || (evt.key && evt.key === 'enter')) {
      onSearch(currentValue);
    }
  };

  const changeHandler = (evt: IChange) => {
    const val = evt.target ? (evt.target as HTMLInputElement).value : null;
    setValue(val || '');
    onChange(evt);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon onClick={() => onSearch(currentValue)} />
      </div>
      <InputBase
        placeholder={placeholder}
        onChange={changeHandler}
        onKeyDown={onKeyPress}
        value={currentValue}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
});

Searchbar.defaultProps = {
  onChange: () => { },
  placeholder: 'Search…',
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Searchbar;
