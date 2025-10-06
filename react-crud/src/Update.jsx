import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Update() {
    
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
        .then((res) => {
            setValues(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, values)
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
                <h1>Update User {id}</h1>
                <br />
                <form onSubmit={handleUpdate}>
                    <input type="text" className="form-control" placeholder="Enter Name" 
                     value={values.name}
                     onChange={(e)=> setValues({...values, name: e.target.value})}
                    />
                    <br />
                    <input type="email" className="form-control" placeholder="Enter Email" 
                      value={values.email} 
                      onChange={(e)=> setValues({...values, email: e.target.value})}
                    />
                    <br />
                    <input type="text" className="form-control" placeholder="Enter Phone" 
                      value={values.phone}  
                      onChange={(e)=> setValues({...values, phone: e.target.value})}
                    />
                    <br />
                    <button className="btn btn-primary">Update</button> &nbsp;
                    <Link to="/" className="btn btn-dark">Back</Link>
                </form>
            </div>
        </>
  );
}
export default Update;    