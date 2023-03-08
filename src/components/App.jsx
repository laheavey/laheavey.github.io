import React from "react";
import headshotImg from '../images/DSC09551.jpg';

import Portfolio from "./Portfolio";
import OnOffer from "./OnOffer";

import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function App () {

  return (
    <Container maxWidth="xl" display="flex" className="pageContent">
      <Grid  display="flex" justifyContent="center" spacing={2}>
        <img src={headshotImg} className="headshotImg" />
        <Grid container sx={{ alignContent: 'center' }} xs={6}>
          <Stack spacing={2}>
          {/* <Item> */}
            <h1>Hello! I'm Lauren.</h1>
            {/* </Item> */}
          {/* <Item> */}
            <p>Software engineer, hobby connisseur, generally fun person.</p>
            {/* <Item /> */}
          {/* <Portfolio /> */}
          {/* <OnOffer /> */}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}