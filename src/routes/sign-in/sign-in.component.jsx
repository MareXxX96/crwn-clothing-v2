
import { useEffect } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const SignIn = () => {

    return( <div>
        
        <div className='sign-main'>
            <SignInForm />
            <SignUpForm />
        </div>
    </div>
)}

export default SignIn