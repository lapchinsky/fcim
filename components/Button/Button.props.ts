import { ReactNode} from "react";

export interface ButtonProps {
    children: ReactNode;
    appearance: 'dark' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}