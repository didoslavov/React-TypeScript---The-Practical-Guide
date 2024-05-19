import { useRef } from 'react';
import Form, { FormHandle } from './ui/Form';
import Input from './ui/Input';
import Button from './ui/Button';
import { useTimersContext } from '../hooks/use-timers-context';

const AddTimer = () => {
    const form = useRef<FormHandle>(null);
    const { addTimer } = useTimersContext();

    const handleSaveTimer = (data: unknown) => {
        const formData = data as { name: string; duration: string };

        addTimer({ id: Date.now(), name: formData.name, duration: Number(formData.duration) });

        form.current?.clear();
    };

    return (
        <Form ref={form} onSave={handleSaveTimer} className="w-1/2 mx-auto text-center">
            <Input id="name" label="Name" type="text" className="mb-4" />
            <Input id="duration" label="Duration" type="number" className="mb-4" />
            <p className="text-center mb-8">
                <Button>Add Timer</Button>
            </p>
        </Form>
    );
};

export default AddTimer;
