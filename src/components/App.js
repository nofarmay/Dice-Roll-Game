import React from "react";
import Card from "./Card"
// import Main from "./Main"
import "./components/App.css";

function App() {
const [lastroll,setlastroll] =React.useState({
  player1current:0,
  player2current:0,
  player1score:0,
  player2score:0,
  isHold:true,
})
// const [gameOn,winnerDecleration] = useState()
const func = () =>{ 
 const dice =[Math.floor(Math.random()*6)+1, Math.floor(Math.random()*6)+1]

 if(lastroll.isHold){
  if(dice[0]+dice[1]===12){
    setlastroll((prevValue)=>{
      return {
        ...prevValue,
        player1current:0,
        player2current:0,
        isHold:!prevValue.isHold,
        }
    })
   }
  setlastroll((prevValue)=>{
    return {
      ...prevValue,
      player1current:prevValue.player1current+dice[0]+dice[1]
    }
  })
}
else{
  if(dice[0]+dice[1]===12){
    setlastroll((prevValue)=>{
      return {
        ...prevValue,
        player1current:0,
        player2current:0,
        isHold:!prevValue.isHold,
        }
    })
   }
  setlastroll((prevValue)=>{
    return {
      ...prevValue,
      player2current:prevValue.player2current+dice[0]+dice[1]
    }
  })
}
}

// const reset = () => {current=0,total=0}
const hold = () => {
  
  if(lastroll.isHold){
    setlastroll((prevValue)=>{
    return {
      ...prevValue,
      player1score: prevValue.player1current +prevValue.player1score,
      isHold:false,
      player1current:0
      }
  })
  }
  else{
    setlastroll((prevValue)=>{
    return {
      ...prevValue,
      player2score: prevValue.player2current +prevValue.player2score,
      isHold:true,
      player2current:0
      }
  })
  }
}
// const checkroll = () =>
//  {if dice1 === 6 && dice2 === 6 {hold} else }

// const sam = function (latest,current){
//   if (({lasttest}+{current})>100){
//     winnerDecleration;
//     console.log('__ is the winner');
//     return;
//   } else{
//     gameOn,
//     console.log('__ turn');
//   } 
// }; 

return (
    <div>
   
      {/* <Main/> */}
 <Card playerscore={lastroll.player1score} current={lastroll.player1current} player={"player 1"}/>
 <Card playerscore={lastroll.player2score} current={lastroll.player2current} player={"player 2"}/>
 <button onClick={()=>func()}>Roll</button>
 <button onClick={()=>console.log('b')}>reset</button>
 <button onClick={hold}> hold</button>
    </div>
  );
}

export default App;
