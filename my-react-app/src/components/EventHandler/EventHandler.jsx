import React from "react";

const EventHandler = ({ message, children }) => {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div>
      <button onClick={handleClick}>I don't do anything</button>
      <button
        onClick={function handleClick() {
          alert("You clicked me!");
        }}
      >
        I don't do anything
      </button>
      <button
        onClick={() => {
          alert(message);
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default EventHandler;
