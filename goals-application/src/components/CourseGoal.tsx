import { ReactNode } from 'react';

type CourseGoalProps = {
    title: string;
    children: ReactNode;
};

const CourseGoal = ({ title, children }: CourseGoalProps) => {
    return (
        <article className="">
            <div>
                <h2 className="font-black text-xl mb-4">{title}</h2>
                {children}
            </div>
            <button className="rounded-sm px-6 py-1 bg-slate-100 text-slate-950">Delete</button>
        </article>
    );
};

export default CourseGoal;
