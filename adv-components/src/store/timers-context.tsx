import { type ReactNode, createContext, useReducer } from 'react';

export type Timer = { id: number; name: string; duration: number };

type TimersState = {
    id: number;
    isRunning: boolean;
    timers: Timer[];
};

type TimersContextValue = TimersState & {
    startTimer: () => void;
    stopTimer: () => void;
    addTimer: (timer: Timer) => void;
};

type StartTimersAction = { type: 'START_TIMER' };

type StopTimersAction = { type: 'STOP_TIMERS' };

type AddTimerAction = { type: 'ADD_TIMER'; payload: Timer };

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

const initialState: TimersState = {
    id: Date.now(),
    isRunning: false,
    timers: [],
};

export const TimersContext = createContext<TimersContextValue | null>(null);

const timersReducer = (state: TimersState, action: Action): TimersState => {
    switch (action.type) {
        case 'START_TIMER':
            return { ...state, isRunning: true };
        case 'STOP_TIMERS':
            return { ...state, isRunning: false };
        case 'ADD_TIMER':
            return { ...state, timers: [...state.timers, action.payload] };
        default:
            return state;
    }
};

const TimersProvider = ({ children }: { children: ReactNode }) => {
    const [timers, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        id: timers.id,
        timers: timers.timers,
        isRunning: timers.isRunning,
        startTimer: () => {
            dispatch({ type: 'START_TIMER' });
        },
        stopTimer: () => {
            dispatch({ type: 'STOP_TIMERS' });
        },
        addTimer: (timer) => {
            dispatch({ type: 'ADD_TIMER', payload: timer });
        },
    };

    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
};

export default TimersProvider;
