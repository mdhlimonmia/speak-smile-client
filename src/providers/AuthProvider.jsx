import { Children, createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = () => {
    return (
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;