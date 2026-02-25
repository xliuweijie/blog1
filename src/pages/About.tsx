import { blogConfig } from "@/data/blogConfig";
import { Github, Mail } from "lucide-react";
import type { ReactElement } from "react";

export function About() {
  // 将内容按段落分割并渲染
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: ReactElement[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim() === "") {
        elements.push(<div key={key++} className="h-4" />);
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
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Profile Card */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-slate-100">
            <img
              src={blogConfig.site.avatar}
              alt={blogConfig.site.author}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {blogConfig.site.author}
          </h1>
          
          <p className="text-slate-500 mb-6">
            {blogConfig.site.description}
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <a
              href={blogConfig.site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={`mailto:${blogConfig.site.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              联系我
            </a>
          </div>
        </div>

        {/* About Content */}
        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            {blogConfig.about.title}
          </h2>
          {renderContent(blogConfig.about.content)}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 py-8 border-t border-b border-slate-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">
              {blogConfig.posts.length}
            </div>
            <div className="text-sm text-slate-500 mt-1">文章</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">
              {new Set(blogConfig.posts.flatMap((p) => p.tags)).size}
            </div>
            <div className="text-sm text-slate-500 mt-1">标签</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">
              {new Date().getFullYear()}
            </div>
            <div className="text-sm text-slate-500 mt-1">开始于</div>
          </div>
        </div>
      </div>
    </div>
  );
}
