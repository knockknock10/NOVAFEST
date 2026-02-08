import { useState } from "react"
import "./CommentShow.css"
import Comments from "./Comments"
export default function CommentShow(){
    let [comments,setComments] = useState([{
        username:"@sk",
        remarks:"great job",
        rating:4
    }])
    
    let addNewComment = (comment)=>{
        setComments((currComments)=>[...currComments,comment]);
    };
    
    return(
        <>
        <div>
            <h4>All Comments</h4>
            {comments.map((comment,idx)=>(
                <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>&nbsp;&nbsp;
                    <span>rating ={comment.rating}</span>&nbsp;&nbsp;
                    <p>- {comment.username}</p>
                 </div>
            ))}
            <hr></hr>
        </div>
        <Comments addNewComment={addNewComment}/>
        
        </>
    )
}