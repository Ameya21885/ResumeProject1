import React from "react";

// movie

const Four_One = ({ name, price, key }) => {
  return (
    <>
      {/* <div>Four_One</div> */}

      <div>
        <h3>{name}</h3>
        <h3>{price}</h3>
        <h3>{key}</h3>
      </div>
    </>
  );
};

export default Four_One;
