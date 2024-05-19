import { useTimersContext } from '../store/timers-context';
import Timer from './Timer';

const Timers = () => {
    const { timers } = useTimersContext();

    return (
        <ul className="flex flex-wrap gap-2">
            {timers.map((timer) => (
                <li key={timer.id} className="flex-1 min-w-[40%] max-w-[50%]">
                    <Timer {...timer} />
                </li>
            ))}
        </ul>
    );
};

export default Timers;
