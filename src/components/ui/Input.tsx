import { HTMLProps } from "react";
import classNames from "classnames";

export const Input = (props: HTMLProps<HTMLInputElement>) => {

    const classes = classNames(
        'border-[1px] border-gray-500 rounded-md px-3 py-2 w-[350px] max-w-full shadow-lg',
        props.className
    )
    const { className, ...rest } = props;
    return <input className={classes} {...rest} />;
}
