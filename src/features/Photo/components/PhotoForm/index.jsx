import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import RandomPhotoField from 'custom-fields/RandomPhoto/RandomPhotoField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import * as yup from 'yup';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { onSubmit, initialValues, isEdit } = props;

  const validationSchema = yup.object().shape({
    title: yup.string().required('This field is required.'),
    category: yup.number().required('This field is required.').nullable(),
    photo: yup.string().when('category', {
      is: 1,
      then: yup.string().required('This field is required.'),
      otherwise: yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
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
              <Button type='submit' color={isEdit ? 'success' : 'primary'}>
                {isSubmitting && <Spinner size='sm' />}
                {isEdit ? 'Edit to album' : 'Add to album'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
