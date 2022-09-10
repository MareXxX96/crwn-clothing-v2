import { async } from "@firebase/util";
import { useState } from "react";
import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import {signInWithEmailAndPassword} from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from '../button/button.component'

const loginFormFields = {
    email : '',
    password : '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(loginFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(loginFormFields)
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const googleSignIn = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!email || !password) {
            alert('Please enter email AND password')
            return
        }

        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            resetFormFields()
            console.log(user)
        } catch (err){
            if (err == 'auth/wrong-password') {
                alert('Wrong email or password')
            }
            console.log(err)
        }
    }

    return(
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput required label="Email" type="email" onChange={handleChange} name='email' value={email}/>

                <FormInput required label="Password" type="password" onChange={handleChange} name='password'value={password}/>
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button buttonType='google' onClick={googleSignIn}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm