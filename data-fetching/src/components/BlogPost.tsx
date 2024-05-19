export type BlogPost = {
    id: number;
    title: string;
    text: string;
};

type BlogPostProps = {
    posts: BlogPost[];
};

const BlogPost = ({ posts }: BlogPostProps) => {
    return (
        <div>
            <h1>Blog Post</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPost;
