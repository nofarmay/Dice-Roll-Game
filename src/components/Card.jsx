import React from "react";
function Card({player,current,playerscore})
{
    return  (
       <div className="wrapper">
        <h1>{player}</h1>
        <div>{playerscore}</div>
        <div className="carrunt wrapper"> 
         <div>Current: {current}</div>
         <div>number</div>
        </div>
       </div>
    )
}
export default Card;