import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  options: [],
  label: '',
  placeholder: '',
  disabled: false,
};

function SelectField(props) {
  const {
    field: { name, onChange, value, onBlur },
    options,
    label,
    placeholder,
    disabled,
  } = props;

  const selectedOption = options.find((opt) => opt.value === value);

  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        onBlur={onBlur}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default SelectField;
