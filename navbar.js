import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
    const auth = useAuth()
    return(
        <div className="container">
            <NavLink to = "user">User</NavLink>
            <NavLink to = "form">Form</NavLink>
            <NavLink to = "profile">Profile</NavLink>
            {
                !auth.user && <NavLink to = "login">Admin</NavLink>
            }
            
        </div>
    )
}
export default Navbar