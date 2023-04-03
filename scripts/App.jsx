import React from "react";
import headshotImg from '../images/DSC09551.jpg';

import Portfolio from "./Portfolio";
import OnOffer from "../src/components/OnOffer";


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';


export default function App () {
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