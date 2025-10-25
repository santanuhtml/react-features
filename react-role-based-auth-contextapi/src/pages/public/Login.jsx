// import { useState } from "react";
import { useForm } from "react-hook-form";
import { use, useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";   
import axios from "axios";
import { useEffect } from "react";

function Login(){


    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const {user, login} = useContext(AuthContext);
    const {register, handleSubmit, formState: {errors}} = useForm()

    const formSubmit = async (data) =>{
        const response = await axios.get('https://68edf0acdf2025af7801a96c.mockapi.io/users');
        const loggedInUser = response.data.find((user) => user.email === data.email && user.password === data.password);
        if(loggedInUser){
            login(loggedInUser); // Log in the user after successful signup
            setErrorMessage('');
            navigate('/profile');
        }
        else{
            setErrorMessage('Invalid credentials');
        }
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
                <h1 className="text-3xl font-bold">Login Page</h1>
                <div>
                    <form onSubmit={handleSubmit(formSubmit)}>
                       
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
                            <label>Password</label> <br />
                            <input type="password"
                            
                                {...register("password", {
                                    required:'password is required'
                                 })}
                                
                            />
                            <br />
                            <div>{errors.password && <p>{errors.password.message}</p>}</div>

                        </div>
                        
                        <div>
                            <button type="submit">Login</button>
                        </div>
                        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                    </form>
                    <p><Link to='/signup'>Signup</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;



//For future JWT integration, you can replace the current request with the following:
/*
const formSubmit = async (data) => {
        const response = await axios.post('https://your-api-endpoint.com/login', {
            email: data.email,
            password: data.password
        });

        if (response.data.token) {
            login(response.data); // Log in the user and store JWT token
            setErrorMessage('');
            navigate('/profile');
        } else {
            setErrorMessage('Invalid credentials');
        }
    };
*/