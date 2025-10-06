import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Read() {
    const [data, setData] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

  return (
    <>
        <br />
        <div className="container">
            <h1>User Details</h1>
            <div>
                <div>
                    <strong>Name: {data.name}</strong>
                </div>
                <div>
                    <strong>Email: {data.email}</strong>
                </div>
                <div>
                    <strong>Phone: {data.phone}</strong>
                </div>
            </div>
            <div>
                <Link to="/" className="btn btn-dark">Back</Link>
                &nbsp;
                <Link to={`/update/${id}`} className="btn btn-success">Update</Link>
            </div>
        </div>
        <br />
    </>
  );
}
export default Read;    