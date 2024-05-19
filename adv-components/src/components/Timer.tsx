import { type Timer as TimerProps } from '../store/timers-context';
import Container from './ui/Container';

const Timer = ({ name, duration }: TimerProps) => {
    return (
        <Container as="article" className="bg-lime-800 shadow-xl flex flex-col items-center gap-6 py-4 rounded-md">
            <h2 className="text-xl font-semibold text-lime-500">{name}</h2>
            <p className="text-sm text-lime-100">{duration}</p>
        </Container>
    );
};

export default Timer;
