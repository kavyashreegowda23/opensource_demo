import { useState, useContext, createContext } from "react";

const ucntxt = createContext();

export const Ucprovider = ({ children }) => {
    const [userlist, setUserlist] = useState([]);

    const Addusers = (user) => {
        setUserlist((prevstate) => [...prevstate, user]);
    };

    const Deluser = (uname) => {
        setUserlist((prevstate) =>
            prevstate.filter((usr) => usr.name !== uname)
        );
    };

    return (
        <ucntxt.Provider value={{ userlist, Addusers, Deluser }}>
            {children}
        </ucntxt.Provider>
    );
};

export const useUserContext = () => {
    return useContext(ucntxt);
};
