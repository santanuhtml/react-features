import { Link, useNavigate } from "react-router-dom";
import { use, useState } from "react";
import axios from "axios";

function Create() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/users", values)
        .then((res) => {
            console.log(res);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <br />
            <div className="container">
                <h1>Create User</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="Enter Name" 
                    onChange={(e)=> setValues({...values, name: e.target.value})} />
                    <br />
                    <input type="email" className="form-control" placeholder="Enter Email" 
                        onChange={(e)=> setValues({...values, email: e.target.value})}/>
                    <br />
                    <input type="number" className="form-control" placeholder="Enter Phone" 
                        onChange={(e)=> setValues({...values, phone: e.target.value})}/>
                    <br />
                    <button className="btn btn-primary">Submit</button> &nbsp;
                    <Link to="/" className="btn btn-dark">Back</Link>
                </form>
            </div>
        </>
    );
}
export default Create;    