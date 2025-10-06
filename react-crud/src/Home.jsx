import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure to delete the user?");
        if(confirmation){
            axios.delete(`http://localhost:3000/users/${id}`)
            .then((res) => {
                console.log(res);
                setData(data.filter((user) => user.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

  return (
    <>
      <br />
      <div className="container">
        <h1>List of the User</h1>
        <br />
        <div className="d-flex justify-content-end">
            <Link to="./create" className="btn btn-primary pull-right">
                Add New +
            </Link>
        </div>
        <br />
        <div className="table-responsive">
             <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link to={`/read/${user.id}`} className="btn btn-sm btn-dark">Read</Link> &nbsp;
                                <Link to={`/update/${user.id}`}  className="btn btn-sm btn-success">Update</Link> &nbsp;
                                <button onClick={e =>handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button> &nbsp;
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
      </div>
       <br />
    </>
  );
    
}
export default Home;    