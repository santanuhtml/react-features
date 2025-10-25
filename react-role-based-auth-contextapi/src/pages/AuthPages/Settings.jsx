
import { Link } from "react-router-dom";
function Settings() {
    return (
        <>
            <div>
            <h1>Settings Page</h1>
            <ul>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </ul>
        </div >
        </>
    )
}

export default Settings;