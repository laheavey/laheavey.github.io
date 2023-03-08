import React from "react";

export default function Portfolio () {
  return (
    <>
    <h2 className="sectionHeader">What I've been up to lately:</h2>
    <section id="projectPortfolio">
      <div className="projectItem">
        <h3 className="projectHeader">Six-Month Progression</h3>
        <p>Started from the bottom, now we're here: or, how I grew from calculator to CRUD.
          A visual timeline of my builds, from October 2022 to March 2023.
        </p>
      </div>
      <div className="projectItem">
        <h3 className="projectHeader">Route Around</h3>
        <p>A web app showcasing modern & historic points of interest located along MN Metro 
          Transit's Green Line lightrail. The purpose of this app was to increase transit 
          ridership, promote tourism in the Twin Cities area, and satisfy my own curiosity 
          about what the hell I'm looking at on my commute.
        </p>
      </div>

    </section>
    </>
  )
}