import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup(){
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const {user} = useContext(AuthContext);
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm()

     const formSubmit = async (data) => {

        // Prepare user data
        const newUser = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password
        };

        // Check if email already exists
        const response = await axios.get('https://68edf0acdf2025af7801a96c.mockapi.io/users');
        const emailExists = response.data.some(user => user.email === data.email);
        if (emailExists) {
            setErrorMessage('Email already exists');
            return;
        }

        // If not, create a new user
        await axios.post('https://68edf0acdf2025af7801a96c.mockapi.io/users', newUser); 
        reset();
        setErrorMessage('');
        navigate('/login');
    }

     useEffect(() => {
        if (user) {
            navigate('/profile');
        }
    }, [user, navigate]);

    // Prevent rendering the login form if the user is already logged in
    if (user) return <p>Redirecting...</p>;

 
    return(
        <> 
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold">Signup Page</h1>
                <div>
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div>
                            <label>Name</label> <br />
                            <input type="text" 
                                 {...register("name", {
                                    required:'Name is required'
                                 })}
                            /> 
                            <br />
                            <div>{errors.name && <p>{errors.name.message}</p>}</div>
                        </div>
                        <div>
                            <label>Email</label> <br />
                            <input type="email"     
                                {...register("email", {
                                required:'Email is required',
                                pattern: { 
                                    value: /\S+@\S+\.\S+/, 
                                    message: "Invalid email" 
                                }
                                })}
                            />
                            <br />
                            <div>{errors.email && <p>{errors.email.message}</p>}</div>
                        </div>
                        <div>
                            <label>Phone</label> <br />
                            <input type="number" 
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Phone number must be a number",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Phone number must be 10 digits",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Phone number must be 10 digits",
                                },
                            })}
                            /> <br />
                            <div>{errors.phone && <p>{errors.phone.message}</p>}</div>
                        </div>
                        <div>
                            <label>Password</label> <br />
                            <input type="password" 
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            <br />
                            <div>{errors.password && <p>{errors.password.message}</p>}</div>

                        </div>
                        <div>
                            <label>Confirm Password</label> <br />
                            <input type="password" 
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: value => value === watch('password') || "Passwords do not match"
                                })}
                            />
                            <br />
                            <div>{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}</div>

                        </div>
                        <div>
                            <button type="submit">Signup</button>
                        </div>
                        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                    </form>
                    <p><Link to='/login'>Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup;