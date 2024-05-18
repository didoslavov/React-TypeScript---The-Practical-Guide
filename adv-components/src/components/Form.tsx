import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandle = {
    clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...rest }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                formRef.current?.reset();
            },
        };
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        onSave(data);
        formRef.current?.reset();
    };

    return (
        <form onSubmit={handleSubmit} {...rest} ref={formRef}>
            {children}
        </form>
    );
});

export default Form;
