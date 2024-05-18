import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';

const image = {
    src: goalsImg,
    alt: 'A list of goals',
};

export default function App() {
    return (
        <main className="bg-slate-200 min-h-screen pt-20 font-poppins">
            <section className="min-h-full max-w-[640px] mx-auto bg-slate-800 px-8 text-white pt-10 pb-8 rounded-lg">
                <Header image={image}>
                    <h1 className="text-3xl text-orange-300 font-black">Your Course Goals</h1>
                </Header>
                <CourseGoal title="Learn React + Typescript">
                    <p className="text-sm mb-2">Learn it from the ground up</p>
                </CourseGoal>
            </section>
        </main>
    );
}
