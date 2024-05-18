import { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

const CourseGoal = ({ id, title, children, onDelete }: CourseGoalProps) => {
    return (
        <article className="">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-black text-xl text-slate-400">{title}</h2>
                    <button onClick={() => onDelete(id)} className="text-slate-500">
                        Delete
                    </button>
                </div>
                {children}
            </div>
        </article>
    );
};

export default CourseGoal;
