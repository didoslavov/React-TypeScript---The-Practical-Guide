import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = ({ id, label, ...props }: InputProps) => {
    return (
        <p className="flex flex-col gap-2 font-bold text-sm uppercase">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...props}
                className="px-2 py-3 outline-none focus:outline-lime-950 focus:-outline-offset-4 rounded-md bg-lime-100 text-lime-950 font-medium"
            />
        </p>
    );
};

export default Input;
