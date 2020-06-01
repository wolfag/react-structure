import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import RandomPhotoField from 'custom-fields/RandomPhoto/RandomPhotoField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
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
  const initValues = { title: '', category: null, photo: null };
  return (
    <Formik
      initialValues={initValues}
      onSubmit={(values) => console.log({ values })}>
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

            <FastField
              name='photo'
              component={RandomPhotoField}
              label='Photo'
            />

            <FormGroup>
              <Button type='submit' onClick={onSubmit} color='primary'>
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
