import React from 'react';
import SignUpForm from '../Components/signupForm';

function SignUp(props) {
    return (
        <main className="bg-gray-100 min-h-screen flex items-center justify-center">
            <section className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
                </div>
                <SignUpForm />
            </section>
        </main>
    );
}
export default SignUp;
