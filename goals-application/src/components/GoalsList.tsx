import { type Goal } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type GoalsListProps = {
    goals: Goal[];
    onDelete: (id: number) => void;
};

const GoalsList = ({ goals, onDelete }: GoalsListProps) => {
    return !goals.length ? (
        <InfoBox mode="hint">You have no course goals yet. Start adding some! </InfoBox>
    ) : (
        <>
            {goals.length >= 4 && (
                <InfoBox mode="warning" severity="medium">
                    You're collecting a lot of goals. First, finish the ongoing ones!
                </InfoBox>
            )}
            <ul className="flex flex-wrap gap-4">
                {goals.map((g) => (
                    <li key={g.id} className="flex-1 max-w-[50%] min-w-[40%] px-4 rounded-lg py-4 bg-slate-700">
                        <CourseGoal onDelete={onDelete} id={g.id} title={g.title}>
                            <p className="text-sm mb-2 text-orange-200">{g.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default GoalsList;
