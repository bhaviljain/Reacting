import React from 'react'
import  {useform} from "react-hook-form"

const FormHandling = () => {
    const {register} =  useform()
    console.log(register);
  return (
    <div>
        <input {...register} type='text'/>
        <input {...register} type='text'/>
        <input type='submit'/>
        <h1>hello</h1>
    </div>
  )
}

export default FormHandling