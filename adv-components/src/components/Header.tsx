import { useTimersContext } from '../hooks/use-timers-context';
import Button from './ui/Button';

const Header = () => {
    const timersCtx = useTimersContext();

    return (
        <header className="flex bg-lime-700 max-w-[768px] mx-auto justify-between py-10 px-10 rounded-tl-md rounded-tr-md text-lime-50 mt-20">
            <h1 className="text-2xl font-semibold">ReactTimer</h1>
            <Button onClick={timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer}>
                {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
            </Button>
        </header>
    );
};

export default Header;
