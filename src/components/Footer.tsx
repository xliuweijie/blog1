import { blogConfig } from "@/data/blogConfig";
import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white mt-auto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} {blogConfig.site.author}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {blogConfig.site.description}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={blogConfig.site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${blogConfig.site.email}`}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
