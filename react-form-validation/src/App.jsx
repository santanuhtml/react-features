import { useForm } from "react-hook-form";

function App(){

  const {register, handleSubmit, formState: {errors}} = useForm()
  
  const formSubmit = (data) =>{
    console.log(data);
  }

  return(
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
           <label>Name</label>
          <input
            {...register("name", {
              required:'Name is required'
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
              required:'Email is required',
              pattern: { 
                value: /\S+@\S+\.\S+/, 
                message: "Invalid email" 
              }
            })}
            placeholder="Enter Your Email"
            type="emial"
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
        <div><button type="submit">Submit</button></div>
      </form>
    </>
  )
}

export default App;