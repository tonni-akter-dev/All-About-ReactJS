import React from "react";
import Button from "./Button";

const Toolbar = () => {
  return (
    <>
      <div onClick={() => alert("you are clicking toolbar")}>
        <Button onClick={() => alert("playing Movie")}>Play movie</Button>
        {/* // first-->"playing Movie" /sec-->"you are clicking toolbar"  thats called event propagation  */}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert("Submitting!")}}>
        <input />
        <button>Send</button>
      </form>
    </>
  );
};

export default Toolbar;
