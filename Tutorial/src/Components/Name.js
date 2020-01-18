import React from "react";
import DateCheck from "./DateCheck";

function Name() {
  const FirstName = "Sam";
  const LastName = "Wilson";

  return (
    <div>
      <h1>
        <DateCheck /> {`${FirstName} ${LastName}`}
      </h1>
    </div>
  );
}

export default Name;
