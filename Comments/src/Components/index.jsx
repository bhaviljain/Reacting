import { useState } from "react";

const CommentItem = ({comment,addNewReply})=>{
    const[showReply,toggleReply]=useState(false)
    const[showAddReply,toggleAddReply]=useState(false)
    console.log(comment);

    const addCommentUtil = (e)=>{
        const newComment = e.target.value
        addNewReply(comment.id,newComment)
        toggleAddReply(false)
        toggleReply(true) 
    }
    const handleBlur = (e)=>{
        addCommentUtil(e)
    }
    const handleKey = (e)=>{
        if(e.key === "Enter" || e.keyCode === 13){
            addCommentUtil(e)
        }
    }
  return (
    
    <div className="commentContainer">
        <div className="details">
       <div>  {comment.comment}</div>
       <div className="controls">
       {comment.subComments.length > 0 && <span onClick={()=>toggleReply(!showReply)}>View</span>}
        <span onClick={()=>toggleAddReply(!showAddReply)}>Reply</span>
    </div>
    </div>
    {showReply && (
        <Comment commentsData={comment.subComments}
        addNewReply={addNewReply}/>
    )}
   { showAddReply && <input type="text"
   onBlur={handleBlur}
   autoFocus
   onKeyDown={handleKey}
   />}
   </div> 
  )
}

const Comment = ({commentsData,addNewReply}) =>{

    return(
        <>
        {commentsData.map((comment)=>{
            return (
                <div>
                    <CommentItem comment={comment}
                      addNewReply={addNewReply}
                    />
                </div>
            )
        })}
        </>
    )
}
export default Comment