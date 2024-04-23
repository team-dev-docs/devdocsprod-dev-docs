import React, { useRef } from 'react';

const FullScreenImage = ({ src, alt, height, width, className }) => {
  const imageRef = useRef(null);

  const handleImageClick = () => {
    if (imageRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        imageRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      }
    }
  };

  return (
    <img
      ref={imageRef}
      src={src}
      height={height}
      width={width}
      onClick={handleImageClick}
      className={className}
      style={{ cursor: 'pointer' }}
      alt="click to view in full screen"
    />
  );
};

export default FullScreenImage;
