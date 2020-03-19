import React, { useState } from "react";

export default function Example01() {
  const [cnt, addCnt] = useState(0);
  return (
    <div>
      <div>{cnt}</div>
      <button
        onClick={() => {
          addCnt(cnt + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          addCnt(cnt - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
