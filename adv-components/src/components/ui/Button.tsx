import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type LinkProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
};

const isAnchor = (props: ButtonProps | LinkProps): props is LinkProps => 'href' in props;

const Button = (props: ButtonProps | LinkProps) => {
    const baseStyles = 'py-2 px-4 bg-lime-200 hover:bg-lime-300 transition-colors duration-300 text-lime-950 rounded-md';
    return isAnchor(props) ? (
        <a {...props} className={`${baseStyles} underline`}></a>
    ) : (
        <button {...props} className={`${baseStyles}`}></button>
    );
};

export default Button;
