import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import RandomPhoto from '.';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
};
RandomPhotoField.defaultProps = {
  label: '',
};

function RandomPhotoField(props) {
  const {
    field: { name, value, onBlur },
    form: { setFieldValue, errors, touched },
    label,
  } = props;

  const handleImageUrlChange = (imgUrl) => {
    setFieldValue(name, imgUrl);
  };

  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
        className={showError ? 'is-invalid' : ''}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default RandomPhotoField;
