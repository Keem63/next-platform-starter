import Link from 'next/link';

export const metadata = {
    title: 'Blog',
    description: 'AI Automation insights and guides'
};

const blogPosts = [
    {
        id: 'getting-started-with-ai-automation',
        title: 'Getting Started with AI Automation',
        description: 'Learn the fundamentals of AI automation and how to begin your journey into intelligent process automation.',
        date: '2024-10-06',
        author: 'AI Automation Pro Team'
    }
];

export default function BlogPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">Blog</h1>
                <p className="text-xl text-blue-200">
                    Insights, guides, and best practices for AI automation
                </p>
            </div>

            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <article key={post.id} className="border border-blue-800 rounded-lg p-6 bg-blue-800/20">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">
                                <Link href={`/blog/${post.id}`} className="hover:text-blue-300 transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-blue-200">{post.description}</p>
                            <div className="flex items-center gap-4 text-sm text-blue-300">
                                <span>By {post.author}</span>
                                <span>•</span>
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                            <Link 
                                href={`/blog/${post.id}`}
                                className="inline-block text-blue-300 hover:text-white transition-colors"
                            >
                                Read more →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}