import './Button.css';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { forwardRef } from 'react';

const Button = forwardRef((props, ref) => {
  const {
    disabled = false,
    onClick = () => {},
    children,
    className,
    type,
  } = props;

  const onInnerClick = (event) => {
    //console.log('button clicked', event);
    onClick(event);
  };

  let isAddCardButton = false;
  let isSearchButton = false;
  let isCommonButton = false;

  switch (type) {
    case 'CommonButton':
      isCommonButton = true;
      break;
    case 'Counter':
      isCommonButton = true;
      break;
    case 'AddCardButton':
      isAddCardButton = true;
      break;
    case 'SearchButton':
      isSearchButton = true;
      break;
    default: {
      isCommonButton = true;
      isAddCardButton = false;
      isSearchButton = false;
    }
  }

  const buttonClassName = cx(
    className,
    { 'CommonButton ': isCommonButton },
    {
      'CommonButton--disabled': disabled,
    },
    { 'add-card-button': isAddCardButton },
    { 'search-button': isSearchButton }
  );

  return (
    <button onClick={onInnerClick} className={buttonClassName} ref={ref}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
