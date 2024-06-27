// CardImageComponent.jsx

import React from 'react';
import PropTypes from 'prop-types';

const CardImageComponent = ({ imageUrl,  }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt="Person's Position" />
      <div className="px-6 py-4">
      </div>
    </div>
  );
};

CardImageComponent.propTypes = {
  imageUrl: PropTypes.string.isRequired,};

export default CardImageComponent;
