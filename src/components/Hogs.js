import React, { useState } from "react";

function Hogs({ hogs }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div onClick={handleClick} className="pigTile">
      <div className="image">
        <img src={hogs.image} />
        {isClicked ? <p>Specialty: {hogs.specialty}</p> : null}
        {isClicked ? <p>Weight: {hogs.weight}</p> : null}
        {isClicked ? <p>Greased: {hogs.greased ? "true" : "false"}</p> : null}
        {isClicked ? (
          <p>Highest Medal Achieved: {hogs["highest medal achieved"]}</p>
        ) : null}
      </div>
      <div className="header">
        <h3>{hogs.name}</h3>
      </div>
    </div>
  );
}

export default Hogs;
