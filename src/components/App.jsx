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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import { grey } from '@mui/material/colors';
import { Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function App () {

  return (
    <div className="flex-container">
      <div  className="img-container">
        <img src={headshotImg} className="headshotImg" />
        <div className="icon-container">
        <a href="https://www.linkedin.com/in/laheavey/">
          <LinkedInIcon sx={{ marginRight: 1}} color="primary" />
        </a>
        <a href="https://github.com/laheavey">
          <GitHubIcon sx={{ marginRight: 1, color: grey[900]}} />
        </a>
        <a href="lheavey_resume_online.pdf">
          <AssignmentIcon sx={{ marginRight: 1, color: '#3D5936'}} />
        </a>
        <a href="lheavey_resume_online.pdf">
          <EmailIcon sx={{color: '#F87D3A'}} />
        </a>
        </div>

      </div>
      <div className="content-container">
        <section className="content about-me">
            <Typography variant="h2" gutterBottom>Hello! I'm Lauren.</Typography>
            <Typography variant="body1" sx={{fontWeight: 'light'}}>Software engineer, hobby connisseur, generally fun person.</Typography>
        </section>
        {/* <section className="content on-offer">
          <OnOffer />
        </section> */}
        <section className="content portfolio">
          <Portfolio />
        </section>

      </div>
    </div>
  )
}