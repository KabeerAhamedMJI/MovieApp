import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addOneReview } from "../app/features/reviews/reviewSlice";

export default function ReviewForm(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        const payload = {
            ...data,
            movie: props.movieId,
            user: props.userName
        }
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/reviews`, payload, { withCredentials: true })
            .then(response => dispatch(addOneReview(response.data)))
            .catch(error => console.log(error));
    };

    return (
<form onSubmit={handleSubmit(onSubmit)} className="border border-gray-300 p-4 rounded-lg">
    <label htmlFor="title">Title</label>
    <input id="title" {...register("title", { required: true })} type="text" className="block w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
    {errors.title && <p className="text-red-500">Title is required</p>}

    <label htmlFor="description">Review</label>
    <textarea id="description" rows={6} {...register("description", { required: true, maxLength: 250 })} className="block w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
    {errors.description && <p className="text-red-500">Review is required and should be less than 250 characters</p>}

    <div className="flex justify-center">
        <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mt-4 text-base" />
    </div>
</form>


    );
}
