import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

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
    form: { errors, touched },
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

  const showError = errors[name] && touched[name];

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
        className={showError ? 'is-invalid' : ''}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
