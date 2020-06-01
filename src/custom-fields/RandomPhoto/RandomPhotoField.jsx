import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from '.';

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
    form: { setFieldValue },
    label,
  } = props;

  const handleImageUrlChange = (imgUrl) => {
    setFieldValue(name, imgUrl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    </FormGroup>
  );
}

export default RandomPhotoField;
