import React from "react";
import headshotImg from '../images/DSC09551.jpg';

import Portfolio from "./Portfolio";
import OnOffer from "./OnOffer";
import ReachOut from "./ReachOut";

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
  document.title = 'Lauren Heavey';
  return (
    <div className="flex-container">
      <div  className="img-container">
        <img src={headshotImg} className="headshotImg" />
        <div className="icon-container">
        <a href="https://www.linkedin.com/in/laheavey/" target="_blank" title="LinkedIn">
          <LinkedInIcon sx={{ marginRight: 1}} color="primary" />
        </a>
        <a href="https://github.com/laheavey" target="_blank" title="GitHub">
          <GitHubIcon sx={{ marginRight: 1, color: grey[900]}} />
        </a>
        <a href="lheavey_resume_online.pdf" target="_blank" title="Resume">
          <AssignmentIcon sx={{ marginRight: 1, color: '#3D5936'}} />
        </a>
        <a href="mailto:lauren.a.heavey@gmail.com" title="Email">
          <EmailIcon sx={{color: '#F87D3A'}} />
        </a>
        </div>

      </div>
      <div className="content-container">
        <section className="content" id="page-top">
            <Typography variant="h2" gutterBottom>Hello! I'm Lauren.</Typography>
            <Typography variant="body1" sx={{fontWeight: 'light'}} gutterBottom>Software engineer, hobby connisseur, generally fun person.</Typography>
            <p>
            <Typography variant="overline">
              <a href="#about-me">
                About Me   
              </a>
              {` // `}
              <a href="#portfolio">
                Portfolio
              </a>
            </Typography>
            </p>
        </section>
        <section className="content" id="about-me">
          <OnOffer />
        </section>
        <section className="">

        </section>
        <section className="content" id="portfolio">
          <Portfolio />
        </section>

      </div>
    </div>
  )
}