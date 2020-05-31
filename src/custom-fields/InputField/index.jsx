import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InputField(props) {
  const {
    field,
    field: { name },
    type,
    label,
    placeholder,
    disabled,
  } = props;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        {...field}
        type={type}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;
