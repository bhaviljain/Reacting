import React from 'react'
import { useForm } from 'react-hook-form';

const FormHandling = () => {
    const {register,handleSubmit} = useForm()
  return (
    <div>
        <form action="" onSubmit=
        {handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type='text'/>
        <input {...register("age")} type='text'/>
        <input type='submit'/>
        </form>
    </div>
  )
}

export default FormHandling