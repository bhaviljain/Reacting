import React, { useState } from 'react'

export const Folder = ({files}) => {
    const [expand , setExpand] = useState(false)
    console.log(files);
  return (
    <>
    <div>
        <div onClick={()=>setExpand(!expand)}>
            {files.isFolder ? (
                <button className={expand ? "expandTrue" : ""}>
 {">"}
                </button>
            ) : "null"}
    {files.name}
    </div>

    {files.isFolder && expand &&
    files.children.map((exp)=>{
    return (
    <div style={{paddingLeft: "20px"}}>
        <Folder files={exp}/>
    </div>     
    )
    })
    }
    </div>

    
    </>
  )
}
