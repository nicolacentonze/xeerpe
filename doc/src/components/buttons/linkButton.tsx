import Link from 'next/link';
import classes from './button.module.css';
import {LinkButtonProps} from "@/src/models/linkButton.ts";

const LinkButton = ({href, variant = 'primary', children}: LinkButtonProps) => {
    return (
        <Link href={href} className={`${classes.xeerpeButton} ${classes[variant]}`}>
            {children}
        </Link>
    );
};

export default LinkButton;