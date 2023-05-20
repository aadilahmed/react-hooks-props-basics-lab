import React from "react";
import Links from './Links';

function About(props) {
  let bioExists = true;
  if(props.bio === undefined || props.bio === "") {
    bioExists = false;
  }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioExists ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
