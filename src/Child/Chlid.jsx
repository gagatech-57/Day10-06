import React from "react";
const Child =React.memo(({count})=>{
    console.log("Child Rendered!")
    return <h2>Child count:{count}</h2>
});
export default Child;
