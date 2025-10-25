import { Link } from "react-router-dom";

function Dashboard(){
    return(    
        <> 
            <h1>Dashboard Page</h1>
             <ul>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
            </ul>
        </>
    )
}

export default Dashboard;