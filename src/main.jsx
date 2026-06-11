import React from "react";
import ReactDOM from "react-dom/client";
import Child from "./Child/Chlid";
import Memo from "./Child/memo";
import NModal from "./Model/NModel";
import Wrapper from "./Wra/Wrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <NModal />

    <Child count={1} />
    <Child count={2+8} />
    <Memo />
    <Wrapper />

  </React.StrictMode>
);