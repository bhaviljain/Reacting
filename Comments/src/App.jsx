import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import commentsData from './data/Comment'
import Comment from './Components/index'
import updateComment from './helper'

function App() {
  const [comments, setComments]= useState(commentsData)
  const addNewReply = (targetID, newComment)=>{
  const newUpdatedComment = updateComment(comments,targetID,newComment)
  setComments(newUpdatedComment)
  }

  return (
    <>
     <Comment commentsData={comments} addNewReply={addNewReply}/>
    </>
  )
}

export default App
