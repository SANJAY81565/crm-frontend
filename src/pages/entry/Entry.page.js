import React, {useState} from 'react'
import "./entry.style.css"
import { Card } from 'react-bootstrap';
import { Login } from '../../components/login/Login.comp';
import { PasswordReset } from '../../components/passwordReset/PasswordReset.comp';

const Entry = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formType, setFormType] = useState("login")

    const handleOnchange = (e) =>{
      const {name, value} = e.target

      switch(name){
        case 'email':
        setEmail(value)
        break
        case 'password':
        setPassword(value)
        break
        default:
          break
      }
    }

    const handleOnSubmit = (e) =>{
      e.preventDefault()
      console.log(email, password);
    }
    
    const handleOnResetSubmit = (e) =>{
      e.preventDefault()
      console.log(email);
    }

    let formSwitcher =(formType) =>{
        setFormType(formType)
    }
  return (
    <div className='entry-page bg-info'>
        <Card>
          {formType === 'login' && 
          <Login handleOnchange = {handleOnchange} 
          mail = {email} 
          pass = {password} 
          formSwitcher = {formSwitcher}
          handleOnSubmit = {handleOnSubmit}
          />
          }
          
          {formType === 'resetPassword' && 
          <PasswordReset handleOnchange = {handleOnchange} 
          mail = {email} 
          formSwitcher = {formSwitcher}
          handleOnResetSubmit = {handleOnResetSubmit}
          />
          }
          
        </Card>
        </div>
  )
}

export default Entry