import React from 'react';
import { Image as BootstrapImage } from 'react-bootstrap';
import PropTypes from 'prop-types';

const OptimizedImage = ({ src, fallbackSrc, alt, ...props }) => {
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <BootstrapImage src={fallbackSrc} alt={alt} {...props} />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default OptimizedImage;