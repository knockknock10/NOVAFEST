import { useState } from "react"
export default function Ludo(){
    let [moves,setmoves] = useState({blue:0,red:0,yellow:0,green:0});
    let [arr,SetArr] = useState(["no moves"]);
    let updateBlue = ()=>{
        moves.blue+=1;
        console.log(`moves blue = ${moves.blue}`)
        //setmoves({...moves,blue:moves.blue+1});
        setmoves((prevmoves) =>{
            return {...prevmoves,blue:prevmoves.blue+1}
        })
        
        SetArr([...arr,"blue moves"]);
        console.log(arr);
        
    }
    let updateYellow = ()=>{
        moves.yellow+=1;
        setmoves((prevmoves) =>{
            return {...prevmoves,yellow:prevmoves.yellow+1}
        })
    }
    let updateGreen = ()=>{
        moves.green+=1;
        setmoves((prevmoves) =>{
            return {...prevmoves,green:prevmoves.green+1}
        })
    }
    let updateRed = ()=>{
        moves.red+=1;
        setmoves((prevmoves) =>{
            return {...prevmoves,red:prevmoves.red+1}
        })
    }
    
    
    
    return(
        <div>
            <h1>Game begins!!</h1>
            <div className="board">
                <p>{arr}</p>
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick = {updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}























// import { useState } from "react";

// export default function Ludo() {
//   const [moves, setMoves] = useState({
//     blue: 0,
//     red: 0,
//     yellow: 0,
//     green: 0
//   });

//   const [arr, setArr] = useState(["no moves"]);

//   const updateBlue = () => {
//     setMoves(prev => ({ ...prev, blue: prev.blue + 1 }));
//     setArr(prev => [...prev, "blue moves"]);
//   };

//   const updateYellow = () => {
//     setMoves(prev => ({ ...prev, yellow: prev.yellow + 1 }));
//     setArr(prev => [...prev, "yellow moves"]);
//   };

//   const updateGreen = () => {
//     setMoves(prev => ({ ...prev, green: prev.green + 1 }));
//     setArr(prev => [...prev, "green moves"]);
//   };

//   const updateRed = () => {
//     setMoves(prev => ({ ...prev, red: prev.red + 1 }));
//     setArr(prev => [...prev, "red moves"]);
//   };

//   return (
//     <div>
//       <h1>Game begins!!</h1>

//       <div className="board">
//         <p>{arr.join(", ")}</p>

//         <p>Blue moves = {moves.blue}</p>
//         <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

//         <p>Yellow moves = {moves.yellow}</p>
//         <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>+1</button>

//         <p>Green moves = {moves.green}</p>
//         <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>

//         <p>Red moves = {moves.red}</p>
//         <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
//       </div>
//     </div>
//   );
// }
