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
import { colors } from '@mui/material';
import { Bolt, BorderAllRounded } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
      <img src={Slika1} width={365} height={365}/>
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika2} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika3} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika4} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika5} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika6} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika7} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika8} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika9} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika10} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}> <Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika11} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>

      <Grid item xs={3}>
      <img src={Slika12} width={365} height={365} />
        <Item sx={{ backgroundColor: '#ECB176' }}><Box fontWeight={700} fontSize={30} display={'block'}>Cup cake</Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Item>
      </Grid>
    </React.Fragment>
  );
}

 function Grid1() {
  return (
    <Box sx={{ flexGrow: 1, padding:10,}}>
      <Grid container spacing={1} >
        <Grid container item spacing={10} >
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Grid1;