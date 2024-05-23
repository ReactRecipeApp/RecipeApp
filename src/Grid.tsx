import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slika1 from './images/Slika1.jpg';
import Slika2 from './images/Slika2.jpg';
import Slika3 from './images/Slika3.jpg';
import Slika4 from './images/Slika4.jpg';
import Slika5 from './images/Slika5.jpg';
import Slika6 from './images/Slika6.jpg';
import Slika7 from './images/Slika7.jpg';
import Slika8 from './images/Slika8.png';
import Slika9 from './images/Slika9.png';
import Slika10 from './images/Slika10.png';
import Slika11 from './images/Slika11.png';
import Slika12 from './images/Slika12.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const items = [
  { src: Slika1, title: 'Cup cake', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika2, title: 'Salad', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika3, title: 'Pizza', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika4, title: 'Pasta', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika5, title: 'Carrot', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika6, title: 'Cake', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika7, title: 'Salmon', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika8, title: 'Pork', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika9, title: 'Pear', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika10, title: 'Apple', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika11, title: 'Soup', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { src: Slika12, title: 'Peach', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];

interface FormRowProps {
  searchQuery: string;
}

function FormRow({ searchQuery }: FormRowProps) {
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {filteredItems.map((item, index) => (
        <Grid item xs={3} key={index}>
          <img src={item.src} width={365} height={365} />
          <Item sx={{ backgroundColor: '#ECB176' }}>
            <Box fontWeight={700} fontSize={30} display={'block'}>{item.title}</Box>
            {item.description}
          </Item>
        </Grid>
      ))}
    </>
  );
}

interface Grid1Props {
  searchQuery: string;
}

function Grid1({ searchQuery }: Grid1Props) {
  return (
    <Box sx={{ flexGrow: 1, padding: 10 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={10}>
          <FormRow searchQuery={searchQuery} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Grid1;
