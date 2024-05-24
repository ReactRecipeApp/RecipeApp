import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { hover } from '@testing-library/user-event/dist/hover';

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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            New Item
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <TextField
                inputRef={nameRef}
                label="Item Name"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                inputRef={descriptionRef}
                label="Item Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <input
                accept="image/*"
                type="file"
                id="file"
                onChange={handleImageUpload}
                multiple
                style={{ display: 'none' }}
              />
              <label htmlFor="file">
                <Button variant="contained" component="span" sx={{ backgroundColor: '#ECB176' }}>
                  Upload Images
                </Button>
              </label>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#ECB176' }}>
                Submit
              </Button>
            </Box>
          </form>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h2">
              Preview images:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
              {imageURLs.map((url, index) => (
                <img key={index} src={url} width={50} height={50} alt={`preview-${index}`} />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h2">
              Uploaded images:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
              {displayImages.map((url, index) => (
                <img key={index} src={url} width={300} height={300} alt={`uploaded-${index}`} />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h2">
              Items:
            </Typography>
            {names.map((name, index) => (
              <Typography key={index}>{name}</Typography>
            ))}
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h2">
              Descriptions:
            </Typography>
            {descriptions.map((description, index) => (
              <Typography key={index}>{description}</Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default MergedComponent;
