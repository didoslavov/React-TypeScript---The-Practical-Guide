import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import GoalsList from './components/GoalsList';
import NewGoal from './components/NewGoal';

export type Goal = {
    id: number;
    title: string;
    description: string;
};

const image = {
    src: goalsImg,
    alt: 'A list of goals',
};

export default function App() {
    const [goals, setGoals] = useState<Goal[]>([]);

    const handleAddGoal = (goal: string, summary: string) => {
        setGoals((prevGoals) => [...prevGoals, { id: Math.random(), title: goal, description: summary }]);
    };

    const handleDeleteGoal = (id: number) => {
        setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
    };

    return (
        <main className="bg-slate-200 min-h-screen pt-20 font-poppins">
            <section className="min-h-full max-w-[768px] mx-auto bg-slate-800 px-8 text-white pt-10 pb-8 rounded-lg">
                <Header image={image}>
                    <h1 className="text-3xl text-orange-300 font-black">Your Course Goals</h1>
                </Header>
                <NewGoal handleAddGoal={handleAddGoal} />
                <GoalsList goals={goals} onDelete={handleDeleteGoal} />
            </section>
        </main>
    );
}
