import React from "react";
import { Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';


export default function Portfolio () {
  return (
    <>
    <Typography variant="h4" gutterBottom sx={{fontWeight: 'light'}} className="sectionHeader">What I've been up to lately:</Typography>

    <section id="projectPortfolio">
      {/* <div className="projectItem">
        <h3 className="projectHeader">Six-Month Progression</h3>
        <p>Started from the bottom, now we're here: or, how I grew from calculator to CRUD.
          A visual timeline of my builds, from October 2022 to March 2023.
        </p>
      </div> */}
      <div className="projectItem">
        <div className="projectImage">
          {/* <img src="/9ActiveRoute.gif" id="route-around-gif"/> */}
          <img src="/route-around.png" className="screenshot"/>
        </div>
        <div className="projectInfo">
        <Typography variant="h6" className="projectHeader" sx={{fontWeight: 'strong'}}>Route Around</Typography>
        <Typography variant="body1" gutterBottom sx={{fontWeight: 'light'}}>
          A web app showcasing modern & historic points of interest located along MN Metro 
          Transit's Green Line lightrail. The purpose of this app was to increase transit 
          ridership, promote tourism in the Twin Cities area, and satisfy my own curiosity 
          about what the hell I'm looking at on my commute.<br/><br/>
          <a href="https://mighty-crag-14368.herokuapp.com/">Live Preview</a> // <a href="https://github.com/laheavey/route-around">Documentation</a>
          </Typography>
          
        </div>


      </div>
      
      <div className="projectItem">
      <div className="projectImage">
      <img src="/growth-operators.png" className="screenshot"/>
        </div>
        <div className="projectInfo">
        <Typography variant="h6" className="projectHeader" sx={{fontWeight: 'strong'}}>Growth Operators</Typography>
        <Typography variant="body1" gutterBottom sx={{fontWeight: 'light'}}>
        A web app designed & built to assist local consultancy Growth Operators in centralizing 
          their workflow, improving user experience and streamlining documentation for 
          consultants. The resulting product enables them to seamlessly create & access client 
          information, review and edit assessment details, and access dynamically created 
          presentations and reports.<br/><br/>
          <a href="https://desolate-everglades-87798.herokuapp.com/">Live Preview</a> // <a href="https://github.com/laheavey/growth-operators">Documentation</a>
          </Typography>
          </div>
      </div>

    </section>
   
    </>
  )
}