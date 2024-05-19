import { useEffect, useState } from 'react';
import { type Timer as TimerProps } from '../store/timers-context';
import Container from './ui/Container';
import { useTimersContext } from '../hooks/use-timers-context';

const Timer = ({ name, duration }: TimerProps) => {
    const [remainingTime, setRemainingTime] = useState(duration * 1000);
    const formatedFormatedTime = (remainingTime / 1000).toFixed(2);
    const { isRunning } = useTimersContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 50;
            });
        }, 50);

        if (!isRunning) return clearInterval(interval);

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <Container as="article" className="bg-lime-800 shadow-xl flex flex-col items-center gap-6 py-4 rounded-md">
            <h2 className="text-xl font-semibold text-lime-500">{name}</h2>
            <p>
                <progress max={duration * 1000} value={remainingTime} className="rounded-md" />
            </p>
            <p className="text-xl text-lime-100">{formatedFormatedTime}</p>
        </Container>
    );
};

export default Timer;
