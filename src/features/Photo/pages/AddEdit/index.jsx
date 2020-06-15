import Banner from 'components/Banner';
import React from 'react';
import PhotoForm from 'features/Photo/components/PhotoForm';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const photo = useSelector((state) =>
    state.photos.find((x) => x.id === +photoId)
  );

  const initialValues = photoId
    ? photo
    : { title: '', categoryId: null, photo: '' };

  const handleSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let action;
        if (photoId) {
          action = updatePhoto(value);
        } else {
          action = addPhoto(value);
        }
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
        <PhotoForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isEdit={!!photoId}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
