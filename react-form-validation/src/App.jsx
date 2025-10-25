import { useForm } from "react-hook-form";

function App() {

  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm()

  const formSubmit = (data) => {
    
    // Prepare user data
    const newUser = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password
    };
    console.log(newUser);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label>Name</label>
          <input
            {...register("name", {
              required: 'Name is required'
            })}
            placeholder="Enter Your Name"
            type="text"
          />
          <div>{errors.name && <p>{errors.name.message}</p>}</div>
        </div>
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email"
              }
            })}
            placeholder="Enter Your Email"
            type="email"
          />
          <div>{errors.email && <p>{errors.email.message}</p>}</div>
        </div>
        <div>
          <label>Phone Number</label>
          <input
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
            placeholder="Enter Your Phone Number"
            type="text"
          />
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
        <div><button type="submit">Submit</button></div>
      </form>
    </>
  )
}

export default App;