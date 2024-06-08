const updateComment =(comments,targetID,newComment) =>{
  const commentsCopy = JSON.parse(JSON.stringify(comments))
  for(const comments of commentsCopy){
    if(comments.id === targetID){
        comments.subComments.push({
            id: new Date().getTime(),
            comment:newComment,
            subComments:[],
        })
    }
    if(comments.subComments.length > 0){
        comments.subComments = updateComment(comments.subComments,targetID,newComment)
    }
  }
  return commentsCopy
}

export default updateComment