// import the required packages
import { ActivityIndicatorProps, ColorValue, StyleProp, TextProps, ViewStyle } from "react-native";

// import local types 
import { ChildrenProps, SeperateMarginProps } from "./GlobalTypes";
import { ReactNativePaperButtonProps } from "./PaperTypes";

// type for AppButton  
export type AppButtonProps = {
    title?: string;
    children?: any;
    height?: number;
    roundness?: number;
    backgroundColor?: string;
    color?: string;
    elevation?: number;
} & Omit<ReactNativePaperButtonProps, 'children'> & ChildrenProps & SeperateMarginProps;

// interface for AppLoading
export interface AppLoadingProps {
    visible?: boolean;
    loadingText?: string;
    loadingTextProps?: AppTextProps;
    indicatorProps?: ActivityIndicatorProps;
    containerStyles?: StyleProp<ViewStyle>;
}

// interface for AppText
export interface AppTextProps extends TextProps, SeperateMarginProps {
    text?: string;
    color?: ColorValue;
    size?: number;
    family?: string;
}

// interface for BackDropProps
export interface BackDropProps {
    style?: any;
    children?: any;
    onBackDropPress?: any;
    visible?: boolean;
}

// interface for each marker
export type CoordinateTypes = {
    latitude: number;
    longitude: number;
    name?: string;
};