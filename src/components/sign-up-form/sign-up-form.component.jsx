import { async } from "@firebase/util";
import { useState } from "react";
import {createUserDocWithEmailAndPassword, auth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from '../button/button.component'


const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

   

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!email || !password) return

        if (password != confirmPassword) {
            alert('Passwords must match')
            return
        } 

        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, {displayName:displayName})
            console.log(user)
            const userDocRef = await createUserDocWithEmailAndPassword(user)
            resetFormFields()
        } catch (err){
            if(err.code == 'auth/email-already-in-use') {
                alert('Email already in use')
            }
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account yet?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput required label="Display Name" type="text" onChange={handleChange} name='displayName' value={displayName}/>

                <FormInput required label="Email" type="email" onChange={handleChange} name='email' value={email}/>

                <FormInput required label="Password" type="password" onChange={handleChange} name='password'value={password}/>

                <FormInput required label="Confirm Password" type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
            
        </div>
    )
}

export default SignUpForm