import { blogConfig } from "@/data/blogConfig";
import { PostCard } from "@/components/PostCard";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {blogConfig.site.title}
          </h1>
          <p className="text-lg text-slate-500 max-w-lg mx-auto">
            {blogConfig.site.description}
          </p>
        </div>
      </section>

      {/* Posts List */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-slate-800">最新文章</h2>
          </div>
          
          <div className="divide-y divide-slate-100">
            {blogConfig.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
