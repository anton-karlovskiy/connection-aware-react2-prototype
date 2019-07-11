
import React from 'react';
import Magnifier from 'react-magnifier';

const Heavy = ({ imageUrl, ...rest }) => {
  return (
    <Magnifier src={imageUrl} {...rest} />
  );
};

export default Heavy;
