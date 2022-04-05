// Import necessary modules
import { StackScreenProps } from "@react-navigation/stack";

// Auth Navigator Screen Params
export type AuthStackParamsList = {
    // Auth Stack Screens 
    LoginScreen: undefined;
    SignUpScreen: undefined;
};

// App Navigator Screen Params
export type AppStackParamsList = {
    // App Stack Screens
    HomeScreen: undefined;
};

// Props for Auth Navigator's Screens
export type AuthScreenProps<Screen extends keyof AuthStackParamsList> = StackScreenProps<
    AuthStackParamsList,
    Screen
>;

// Props for App Navigator's Screens
export type AppScreenProps<Screen extends keyof AppStackParamsList> = StackScreenProps<
    AppStackParamsList,
    Screen
>; 