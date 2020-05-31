import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import Images from 'constants/images';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { onSubmit } = props;
  const initValues = { title: '', category: null };
  return (
    <Formik initialValues={initValues}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form>
            <FastField
              name='title'
              component={InputField}
              label='Title'
              placeholder='Eg: Wow nature'
            />
            <FastField
              name='category'
              component={SelectField}
              label='Category'
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

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
      }}
    </Formik>
  );
}

export default PhotoForm;
