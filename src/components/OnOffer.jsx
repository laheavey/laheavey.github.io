import React from "react";
import Typography from '@mui/material/Typography';

export default function OnOffer () {
  return (
    <section id="OnOffer">        
        <Typography variant="h4" sx={{fontWeight: 'light'}}>What I can offer you:</Typography>
        <Typography variant="subtitle1">...beyond a perpetually sunny disposition</Typography>
        <ul>
          <li>My Resume</li>
          <li>My Contact Info, if you'd like to get in touch</li>
          <li>My Amazon Wishlist (just kidding, that's a little joke for you recruiters)</li>
        </ul>
    </section>
  )
}