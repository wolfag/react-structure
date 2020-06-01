import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
  className: PropTypes.string,
};

RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  onImageUrlChange: null,
  onRandomButtonBlur: null,
  className: '',
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
  const {
    name,
    imageUrl,
    onImageUrlChange,
    onRandomButtonBlur,
    className,
  } = props;

  const handleClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className={`random-photo ${className}`}>
      <div className='random-photo__button'>
        <Button
          outline
          name={name}
          color='primary'
          onBlur={onRandomButtonBlur}
          onClick={handleClick}>
          Random a photo
        </Button>
      </div>
      <div className='random-photo__photo'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt='Ooop...not found. Please click random again!'
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
