import React from "react";
const ImageList = props => {
  console.log(props.images);
  return props.images.map(image => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    );
  });
};
export default ImageList;
