import Header from './components/Header';
import AddTimer from './components/AddTimer';
import Timers from './components/Timers';
import TimersProvider from './store/timers-context';

function App() {
    return (
        <TimersProvider>
            <Header />
            <main className="max-w-[768px] bg-lime-700 text-lime-50 rounded-md rounded-tl-none rounded-tr-none py-10 px-6 mx-auto">
                <AddTimer />
                <Timers />
            </main>
        </TimersProvider>
    );
}

export default App;
