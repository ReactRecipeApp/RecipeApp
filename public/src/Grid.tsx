// src/Grid.tsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
}));

function FormRow() {
  return (
    <React.Fragment>
      {[1, 2, 3, 4].map((id) => (
        <Grid item xs={3} key={id}>
          <Link to={`/recipe/${id}`} style={{ textDecoration: 'none' }}>
            <Item>
              <img src={logo} alt="Recipe Logo" />
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</div>
            </Item>
          </Link>
        </Grid>
      ))}
    </React.Fragment>
  );
}

function Grid1() {
  return (
    <Box sx={{ flexGrow: 1, padding: 20 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={10}>
          <FormRow />
          <FormRow />
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Grid1;
