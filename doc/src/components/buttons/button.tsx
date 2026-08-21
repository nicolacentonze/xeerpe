'use client';

import classes from './button.module.css';
import {ButtonProps} from "@/src/models/button.ts";

const Button = ({ variant = 'primary', className, children, ...rest }: ButtonProps) => {
    return (
        <button
            type="button"
            className={`${classes.xeerpeButton} ${classes[variant]}${className ? ` ${className}` : ''}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;