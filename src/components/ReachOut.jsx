import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

export default function ReachOut () {

  return (
    <>
    <Typography variant="h4" gutterBottom sx={{fontWeight: 'light'}} className="sectionHeader">Get in touch:</Typography>
    <section id="reach-out">        
    <Typography variant="body1" gutterBottom sx={{fontWeight: 'light'}}>
    If you'd like to connect, please feel free to reach out! Here's where you can find me: 
    </Typography>

    </section>
    </>
  )
}