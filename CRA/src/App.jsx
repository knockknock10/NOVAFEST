import "./App.css"
import Producttab from "./ProductTab";
import MsgBox from "./msgBox";
import Cards from "./Cards"
import Event from "./Event"
import Form from "./Form"
import Ludo from "./ludocard/Ludo.jsx"
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx"
import {sum} from "./helper.js"
import Comment from "./Comments.jsx";
import CommentShow from "./CommentShow.jsx";
import Counts from "./Count.jsx"
import Api from "./Api.jsx"

// function Description(){
//   return <h2>this is desc</h2>
// }


function App() {
  // let msg = "Kumar";
  //for passing function as prop
  let winningCondition = (ticket) =>{
    return sum(ticket) === 15;
  }
  return (
  <>
    {/* <MsgBox userName="Sanjeev" textcolor = "pink"/>
    <MsgBox userName="Sanjeev" textcolor = "green"/>
    <h1>Hi,I am Sanjeev {msg}</h1>
    <Producttab/> */}
    {/* <Cards/>
    <Event/>
    <Form/>
    <Ludo/> */}
    {/* <TodoList/> */}
    {/* <Ticket ticket={[0,1,2]}/> */}
    {/* <Lottery n={3} winningSum={15}/> */}
    {/* <Lottery n={3} winningCondition={winningCondition} /> */}
      {/* <Form/> */}
    <CommentShow/>
    <Counts/>
    <Api/>
  </>
  );
  
}

export default App
