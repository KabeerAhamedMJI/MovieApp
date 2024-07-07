import React from 'react';
import LoginForm from '../Components/loginForm';

function Login(props) {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <section className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <div className='container mx-auto'>
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <LoginForm />
                </div>
            </section>
        </main>
    );
}

export default Login;
