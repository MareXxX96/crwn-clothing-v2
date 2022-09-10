import {auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import {getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    useEffect(() => {
        // return async function request() {
        // const response = await getRedirectResult(auth)
        // console.log(response)
        // }
    }, []) 

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    // const signInWithRedirect = signInWithGoogleRedirect()

    return( <div>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>
            Sign in with Google Popup
        </button>
        <button onClick={console.log('clicked')}>
            Sign in with Google Redirect
        </button>
        <SignUpForm />
    </div>
)}

export default SignIn