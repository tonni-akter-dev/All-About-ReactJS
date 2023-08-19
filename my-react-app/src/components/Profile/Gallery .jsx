import React from "react";
import Profile from "./Profile";

const Gallery = () => {
  return (
    <div>
        <h1>Amazing scientists</h1>
      <section style={{display:"flex"}}>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </div>
  );
};

export default Gallery;
