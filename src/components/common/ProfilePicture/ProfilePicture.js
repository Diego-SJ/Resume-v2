import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../../routes/routes';

import './ProfilePicture.scss';
import photo from '../../../assets/img/profile/jdsj.webp';

const ProfilePicture = React.memo(() => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  return (
    <Link to={HOME} className={`header__user ${isImageLoaded && 'load'}`}>
      <img
        onLoad={() => setTimeout(() => setIsImageLoaded(false), 100)}
        src={photo}
        alt="Juan Diego Salas Jimenez"
        className={`header__photo ${isImageLoaded && 'd-none'}`}
      />
    </Link>
  );
});

export default ProfilePicture;
