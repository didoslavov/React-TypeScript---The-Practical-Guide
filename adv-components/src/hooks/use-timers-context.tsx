import { useContext } from 'react';
import { TimersContext } from '../store/timers-context';

export const useTimersContext = () => {
    const ctx = useContext(TimersContext);

    if (!ctx) throw new Error('TimersContext is not provided');

    return ctx;
};
