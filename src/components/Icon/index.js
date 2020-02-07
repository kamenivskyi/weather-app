import React from 'react';
import { imagePrefix } from '../../helpers';

const Icon = ({ type, ...props }) => {
  return <img src={`${imagePrefix}${type}@2x.png`} alt='icon' {...props} />;
};
export default Icon;
