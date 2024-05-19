import { useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';

type RawPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

function App() {
    const [data, setData] = useState<BlogPost[]>();

    useEffect(() => {
        get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setData(
                (response as RawPost[]).map((post) => ({
                    id: post.id,
                    title: post.title,
                    text: post.body,
                }))
            );
        });
    }, []);

    return (
        <main className="max-w-[768px] mx-auto pt-10">
            <img
                src={fetchingImg}
                alt="Data fetching image"
                className="max-w-28 rounded-full mx-auto ring-2 ring-zinc-200 border-zinc-200"
            />
            <BlogPosts posts={data || []} />
        </main>
    );
}

export default App;
