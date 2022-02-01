import React from "react";
import user from '../data/user';

function Links(props) {

  const links = user.links

  return (
    <><h3>Links</h3>
    <a href={links.github}> {links.github} </a>
    <a href={links.linkedin}> {links.linkedin} </a></>
  )
}


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links />}
    </div>
  );
}

export default About;
