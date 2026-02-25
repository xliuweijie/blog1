import { Link } from "react-router-dom";
import type { Post } from "@/data/blogConfig";
import { Calendar, Clock, Tag } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group">
      <Link to={`/post/${post.id}`} className="block">
        <div className="py-6 border-b border-slate-100 transition-all duration-200 hover:pl-2">
          <h2 className="text-xl font-semibold text-slate-800 group-hover:text-slate-600 transition-colors mb-2">
            {post.title}
          </h2>
          
          <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
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
        </div>
      </Link>
    </article>
  );
}
