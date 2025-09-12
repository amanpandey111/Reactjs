import React, { useState } from 'react';
import imglyRemoveBackground from "@imgly/background-removal";

const ImageBackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setOriginalImage(URL.createObjectURL(file));
      setProcessedImage(null);
      removeBackground(file);
    }
  };

  const removeBackground = async (imageFile) => {
    setIsLoading(true);
    try {
      const blob = await imglyRemoveBackground(imageFile);
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
    } catch (error) {
      console.error("Error removing background:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Background Remover</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {isLoading && <p>Removing background, please wait...</p>}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {originalImage && (
          <div style={{ marginRight: '20px' }}>
            <h3>Original</h3>
            <img src={originalImage} alt="Original" style={{ maxWidth: '300px', border: '1px solid #ccc' }} />
          </div>
        )}
        {processedImage && (
          <div>
            <h3>Processed</h3>
            <img src={processedImage} alt="Processed" style={{ maxWidth: '300px', border: '1px solid #ccc' }} />
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ImageBackgroundRemover;