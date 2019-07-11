
import React from 'react';

const Light = ({ imageUrl, ...rest }) => {
  return (
    <img src={imageUrl} alt="product" {...rest} />
  );
};

export default Light;
