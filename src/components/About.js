import React from "react";

function About(props) {
  const imageSrc = props.blogImage || "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{props.blogAbout}</p>
    </aside>
  );
}

export default About;
