import Button from './components/Button';
import Input from './components/Input';

function App() {
    return (
        <main className="bg-lime-50 h-screen pt-20 font-poppins">
            <section className="max-w-[768px] bg-lime-700 text-lime-50 rounded-md py-10 px-6 mx-auto">
                <div className="flex flex-col gap-4">
                    <Input id="name" label="Your Name" />
                    <p>
                        <Button>A button</Button>
                    </p>
                    <p>
                        <Button href="https://google.com">A link</Button>
                    </p>
                </div>
            </section>
        </main>
    );
}

export default App;
