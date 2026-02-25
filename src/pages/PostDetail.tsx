import { useParams, Link, Navigate } from "react-router-dom";
import { blogConfig } from "@/data/blogConfig";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { ReactElement } from "react";

export function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = blogConfig.posts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // 将内容按段落分割并渲染
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: ReactElement[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim() === "") {
        elements.push(<div key={key++} className="h-4" />);
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="text-xl font-semibold text-slate-800 mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("> ")) {
        elements.push(
          <blockquote
            key={key++}
            className="border-l-4 border-slate-200 pl-4 py-2 my-4 text-slate-600 italic"
          >
            {line.replace("> ", "")}
          </blockquote>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={key++} className="ml-6 text-slate-700 leading-relaxed">
            {line.replace("- ", "")}
          </li>
        );
      } else {
        elements.push(
          <p key={key++} className="text-slate-700 leading-relaxed">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-slate max-w-none">
          {renderContent(post.content)}
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            查看更多文章
          </Link>
        </div>
      </div>
    </div>
  );
}
