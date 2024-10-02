import { useUserContext } from "./usercontext";
import { useNavigate } from "react-router-dom";
import './user.css';

const User = () => {
    const uc = useUserContext();
    const nav = useNavigate();
    const userlist = uc.userlist;

    const handleclick = (username) => {
        nav("userdetails",{state:{uname:`${username}`}})
    };

    return (
        <div className="user-container">
            <h1>User</h1>
            <div className="user-list">
                {userlist.map((person) => (
                    <div className="user-item">
                        <h2>{person.Name}</h2>
                        
                        <img
                            src={person.Photo}
                            alt={person.Name}
                            onClick={() => handleclick(person)}
                            className="img"
                        />
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
