import Banner from 'components/Banner';
import React from 'react';
import PhotoForm from 'features/Photo/components/PhotoForm';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const action = addPhoto(value);
        dispatch(action);

        history.push('/photos');

        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo' />
      <div className='photo-edit__form'>
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
