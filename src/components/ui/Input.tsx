import { HTMLProps } from "react";
import classNames from "classnames";

export const Input = (props: HTMLProps<HTMLInputElement>) => {

    const classes = classNames(
        'border-1 border-gray-500 rounded-md p-2 w-[350px] max-w-full',
        props.className
    )
    const { className, ...rest } = props;
    return <input className={classes} {...rest} />;
}
