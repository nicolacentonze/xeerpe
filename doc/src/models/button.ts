import {ButtonHTMLAttributes, ReactNode} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: ReactNode;
}