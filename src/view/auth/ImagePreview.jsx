import React, { useState } from "react";

const ImagePreview = ({ imgFile }) => {
  const [image, setImage] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(imgFile.current.files[0]);
  reader.onload = () => setImage(reader.result);

  return (
    <>
      <img src={image} alt="x" />
    </>
  );
};

export default ImagePreview;
