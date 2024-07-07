import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoginStatus } from '../app/features/login/loginSlice';

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios.post('https://movie-backend-mc30.onrender.com/auth/login', data, { withCredentials: true })
            .then(response => {
                dispatch(changeLoginStatus(true));
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                dispatch(changeLoginStatus(false));
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
            <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label> <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, })} /> {errors.email && <span>Invalid email</span>} </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>

                <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register("password", {
                    required: true, pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })} />
                {errors.password && <span>Invalid password</span>}

            </div>

            <div>
                <input
                    type="submit"
                    value="Login"
                    className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
            </div>
        </form>

    );
}
