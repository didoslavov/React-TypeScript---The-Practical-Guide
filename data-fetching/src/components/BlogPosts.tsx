export type BlogPost = {
    id: number;
    title: string;
    text: string;
};

type BlogPostProps = {
    posts: BlogPost[];
};

const BlogPosts = ({ posts }: BlogPostProps) => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-zinc-300 font-bold mb-6">Blog Post</h1>
            <ul className="flex flex-wrap gap-4 justify-center">
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="capitalize text-sm flex-1 max-w-[50%] text-zinc-500 min-w-[40%] bg-zinc-800 rounded-md p-4">
                        <h2 className="font-bold mb-4">{post.title}</h2>
                        <p>{post.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPosts;
