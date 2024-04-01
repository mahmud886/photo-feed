import React from 'react';
import PhotoCard from "@/components/PhotoCard";

const PhotoList = ({photos}) => {
  return (
    <div className='img-grid'>
      {photos.map((photo) => (
        <PhotoCard photo={photo}/>
      ))}
    </div>
  );
};

export default PhotoList;