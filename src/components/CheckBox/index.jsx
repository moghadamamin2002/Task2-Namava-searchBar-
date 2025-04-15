import React from 'react';
import useStyles from './styles';

const CheckBox = ( { onChange, checked, value, id } ) => {
  const classStyles = useStyles();
  return (
    <input
      id={id}
      className={classStyles.checkBox}
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
