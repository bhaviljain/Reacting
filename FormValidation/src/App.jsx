import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const defaultValues = {
    firstName: {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name...',
      value: '',
      isError: false,
      errorMsg: "First Name can't be empty"
    },
    lastName: {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name...',
      value: '',
      isError: false,
      errorMsg: "Last Name can't be empty"
    },
    email: {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email...',
      value: '',
      isError: false,
      errorMsg: "Email Name can't be empty"
    },
    password: {
      id: 'password',
      label: 'Password',
      type: 'text',
      placeholder: 'Password...',
      value: '',
      isError: false,
      errorMsg: "Password can't be empty"
    },
    confirmPassword: {
      id: 'confirmPassword',
      label: 'Confirm Password',
      type: 'text',
      placeholder: 'Confirm Password...',
      value: '',
      isError: false,
      errorMsg: "Confirm Password  can't be empty"
    }
  }
 

  const [formData, setFormData] = useState(defaultValues)
  const [pass, setpass] = useState(true)


  const ispassWord = () =>{
    const copyformData = {...formData}
    const pass = copyformData['password'].value
    const cPass = copyformData['confirmPassword'].value
    if(pass !== cPass)
      {
      setpass(false)
      }  
      else{
        setpass(true)
      }
  }


  const handleInput = (e) =>{
    const key = e.target.id
    console.log(key);
    const value = e.target.value
    console.log(value);
    const copyformData = {...formData}
     copyformData[key].value = value
     setFormData(copyformData)
     validForm()
     }
     console.log(formData);





const validForm = () =>{
  const copyformData = {...formData}
  Object.keys(copyformData).forEach(key=>{
    const obj =  copyformData[key]
    console.log(obj);
    obj.isError = !obj.value ? true  : false
    ispassWord()
  })
  setFormData(copyformData)
}




const handleSubmit = (e)=>{
e.preventDefault()
validForm()
}





  return (
    <>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key)=>{
          const {id ,label ,type,placeholder,value,isError,errorMsg} = formData[key]
          return(
            <div>
            <label>{label}</label>
            <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleInput}
            id={id}
            />
            {isError && <span className='error'>{errorMsg}</span>}
            
            {
               key === "confirmPassword" && !pass &&
               <span>Password does not match</span>
               
            }
            </div>
            
          )
        })
        
        }
              <button>Submit</button>

      </form>
    </>
  )
}

export default App
