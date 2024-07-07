import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLoginStatus } from '../app/features/login/loginSlice';

function Logout(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect (() =>{
        axios.get('${import.meta.env.VITE_API_BASE_URL}/auth/logout', {withCredentials: true})
        .then(res=>{
            dispatch(changeLoginStatus(false))
            navigate ('/login');

        })
        .catch(error =>{
            console.log(error)
        })
    })
    return (
        <div>
            Logging out...
        </div>
    );
}
export default Logout;