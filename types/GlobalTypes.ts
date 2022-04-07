// Types file made by - Kartikey Vaish

// Children interface
export interface ChildrenProps { children?: React.ReactNode; }

// seperate margin props
export interface SeperateMarginProps {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    margin?: number;
}

// User Props
export interface UserProps {
    name?: string;
    profile_picture?: string;
    email?: string;
}