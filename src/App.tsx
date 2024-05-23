import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';

const MergedComponent: React.FC = () => {
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [displayImages, setDisplayImages] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const urls = Array.from(files).map(file => URL.createObjectURL(file));
      setImageURLs((prevURLs) => [...prevURLs, ...urls]);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current && descriptionRef.current) {
      const valueN = nameRef.current.value.trim();
      const valueD = descriptionRef.current.value.trim();

      if (valueN) {
        setNames((prev) => [...prev, valueN]);
        nameRef.current.value = "";
      }

      if (valueD) {
        setDescriptions((prev) => [...prev, valueD]);
        descriptionRef.current.value = "";
      }

      setDisplayImages(imageURLs);
      setImageURLs([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          New Item: <input ref={nameRef} type="text" />
        </div>
        <div>
          New Description:
          <br />
          <textarea ref={descriptionRef}></textarea>
        </div>
        <div>
          <input
            type="file"
            id="file"
            onChange={handleImageUpload}
            multiple
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        <h3>Preview images:</h3>
        {imageURLs.map((url) => (
          <img src={url} width={50} height={50} />
        ))}
      </div>

      <div>
        <h3>Uploaded images:</h3>
        {displayImages.map((url) => (
          <img src={url} width={300} height={300} />
        ))}
      </div>

      <div>
        <h3>Items:</h3>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>

      <div>
        <h3>Descriptions:</h3>
        {descriptions.map((description, index) => (
          <div key={index}>{description}</div>
        ))}
      </div>
    </div>
  );
};

export default MergedComponent;
