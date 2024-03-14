import React from 'react'
import {useForm} from 'react-hook-form'
export const Form = ({handleFormSubmitedata}) => {
    const {register ,handleSubmit ,reset} = useForm()
    const handleFormSubmit = (data) =>{
        handleFormSubmitedata(data)
        reset()
    }
  return (
    <div className='mt-[130px] flex gap-4 m-auto' 
    >  <form className=''onSubmit={handleSubmit(handleFormSubmit)}>

        <input {...register('name')} className='bg-zinc-300' type='text' placeholder='name'></input>
        <input {...register('email')} className='bg-zinc-300' type='text'placeholder='email'></input>
        <input {...register('imageURL')} className='bg-zinc-300' type='text'placeholder='image url'></input>
        <input className='bg-blue-500' type='submit'></input>
        </form>
    </div>
  )
}
