import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
    handleAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ handleAddGoal }: NewGoalProps) => {
    const refGoal = useRef<HTMLInputElement>(null);
    const refSummary = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const goal = refGoal.current!.value;
        const summary = refSummary.current!.value;

        if (!goal || !summary) return;

        handleAddGoal(goal, summary);

        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mb-6">
            <p className="flex flex-col uppercase gap-1">
                <label htmlFor="goal" className="text-xs text-orange-100 font-bold">
                    Your goal
                </label>
                <input ref={refGoal} id="goal" type="text" className="p-1 rounded-sm bg-slate-400 text-slate-950 outline-none" />
            </p>
            <p className="flex flex-col uppercase gap-1">
                <label htmlFor="summary" className="text-xs text-orange-100 font-bold">
                    Short summary
                </label>
                <input
                    ref={refSummary}
                    id="summary"
                    type="text"
                    className="p-1 rounded-sm bg-slate-400 text-slate-950 outline-none"
                />
            </p>
            <p>
                <button className="text-center w-full bg-orange-200 text-slate-950 p-2 rounded-sm font-bold hover:bg-orange-300 transition-colors duration-300">
                    Add Goal
                </button>
            </p>
        </form>
    );
};

export default NewGoal;
