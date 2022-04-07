// Modules imports
import { createContext } from "react";

// Local Imports 
import { AuthContextProps } from "../types/ContextTypes";

// Context
const AuthContext = createContext<AuthContextProps>({ User: null });

// exports
export default AuthContext;