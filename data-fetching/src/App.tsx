import { useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

function App() {
    const [data, setData] = useState<BlogPost[]>();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        setIsFetching(true);

        get<RawPost[]>('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(
                    response?.map((post) => ({
                        id: post.id,
                        title: post.title,
                        text: post.body,
                    }))
                );
            })
            .catch((e) => {
                if (e instanceof Error) {
                    console.log(e.message);

                    setError(e.message);
                }
            });

        setIsFetching(false);
    }, []);

    return (
        <main className="max-w-[768px] mx-auto pt-10">
            <img
                src={fetchingImg}
                alt="Data fetching image"
                className="max-w-28 rounded-full mx-auto ring-2 ring-zinc-200 border-zinc-200"
            />
            {isFetching && <p className="text-center mt-4 text-zinc-500 text-4xl">Fetching data...</p>}
            {error && <ErrorMessage text={error} />}
            <BlogPosts posts={data || []} />
        </main>
    );
}

export default App;
