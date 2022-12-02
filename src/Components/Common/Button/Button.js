import './Button.css';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Button({
  disabled = false,
  onClick = () => {},
  children,
  className,
  type,
}) {
  const onInnerClick = (event) => {
    console.log('button clicked', event);
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
    <button onClick={onInnerClick} className={buttonClassName}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
