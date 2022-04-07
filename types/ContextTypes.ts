// Types file made by - Kartikey Vaish

import { ChildrenProps, UserProps } from "./GlobalTypes";

export interface AuthContextProps {
    User?: UserProps | null
    Login?: (data: UserProps) => void
    Logout?: () => void
}

export interface AuthProviderProps extends ChildrenProps {
}