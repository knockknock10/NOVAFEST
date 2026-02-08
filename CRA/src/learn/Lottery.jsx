import { useState } from "react";
// import "./Lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winningCondition}){    //before winningSum
    let [ticket,setTicket] = useState(genTicket(3));
    //let isWinning = sum(ticket) === winningSum;  //=== 15
   let isWinning = winningCondition(ticket);
    let buyTicket = ()=> {
        setTicket(genTicket(n))
    }
    return(
        <>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div><br></br> */}
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{isWinning && "Congratulation You Won! "}</h3>
        </>
    );
}