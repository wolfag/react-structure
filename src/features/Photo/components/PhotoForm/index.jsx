import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Images from '../../../../constants/images';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { onSubmit } = props;
  return (
    <Form>
      <FormGroup>
        <Label for='titleId'>Title</Label>
        <Input name='title' id='titleId' placeholder='Eg: Wow nature...' />
      </FormGroup>
      <FormGroup>
        <Label for='categoryId'>Photo</Label>
        <div>
          <Button type='button' outline color='primary'>
            Random a photo
          </Button>
        </div>
        <div>
          <img
            width='200px'
            height='200px'
            src={Images.COLORFUL_BG}
            alt='colorful background'
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Button onClick={onSubmit} color='primary'>
          Add to album
        </Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;
