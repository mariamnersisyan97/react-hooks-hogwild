import React, { useState } from "react";
import Hogs from "./Hogs";
import { v4 as uuidv4 } from "uuid";

function Cards({ hogs }) {
  const [greased, setGreased] = useState(false);
  const handleGreased = () => {
    setGreased(!greased);
  };

  const renderHogs = () => {
    return hogs
      .filter((hog) => {
        if (greased) {
          return hog.greased;
        } else {
          return true;
        }
      })
      .map((hog) => {
        return <Hogs key={uuidv4()} hogs={hog} />;
      });
  };
  return (
    <div className="ui grid container">
      <button onClick={handleGreased}>
        {greased ? "All Hogs" : "Greased Hogs"}
      </button>
      {renderHogs()}
    </div>
  );
}
export default Cards;
