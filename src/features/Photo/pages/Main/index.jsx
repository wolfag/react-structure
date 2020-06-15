import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { removePhoto } from '../../photoSlice';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  return (
    <div className='photo-main'>
      <Banner title='Your awesome photos' backgroundUrl={Images.PINK_BG} />
      <Container className='text-center'>
        <Link to='/photos/add'>Add new photo</Link>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
