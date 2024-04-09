"use client";

import {
    createContext,
    useContext,
    useState,
    type Dispatch,
    type SetStateAction,
} from "react";

interface NavContextProps {
    activeLinkId: string;
    setActiveLinkId: Dispatch<SetStateAction<string>>;
}

export const NavContext = createContext<NavContextProps | undefined>(undefined);

interface NavProviderProps {
    children: React.ReactNode;
}

const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
    const [activeLinkId, setActiveLinkId] = useState("");

    const providerValue: NavContextProps = {
        activeLinkId,
        setActiveLinkId,
    };

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    );
};

export default NavProvider;

export const useNavContext = () => {
    const contextValue = useContext(NavContext);

    if (!contextValue) {
        throw new Error(
            "NavProvider not found. Make sure it wraps your component tree.",
        );
    }

    return contextValue;
};
