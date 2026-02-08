import { useState,useEffect } from "react";


export default function Count(){
    let[count,setCount] = useState(0);
    let[county,setCounty] = useState(0);
    let inCount = () =>{
        setCount((currCount)=> currCount+1);
    };
    let inCountY = () =>{
        setCounty((currCount) => currCount+1);
    }
    useEffect(function printSome(){
        console.log("this is a side effect");
    },
        []
    )
    return(
        <div>
            <h3>count = {count}</h3>
            <button onClick={inCount}>+1</button>
            <h3>count = {county}</h3>
            <button onClick={inCountY}>+1</button>
        </div>
    )
}