import Button from './components/Button';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';
import { useRef } from 'react';

function App() {
    const formRef = useRef<FormHandle>(null);

    const handleSave = (data: unknown) => {
        if (!data || typeof data !== 'object' || !('name' in data) || !('age' in data)) return;

        console.log(data);

        formRef.current?.clear();
    };

    return (
        <main className="bg-lime-50 h-screen pt-20 font-poppins">
            <section className="max-w-[768px] bg-lime-700 text-lime-50 rounded-md py-10 px-6 mx-auto">
                <Form onSave={handleSave} ref={formRef}>
                    <Input id="name" label="Name" type="text" />
                    <Input id="age" label="Age" type="number" className="mb-4" />
                    <p>
                        <Button>Save</Button>
                    </p>
                </Form>
            </section>
        </main>
    );
}

export default App;
