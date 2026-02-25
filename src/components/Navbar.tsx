import { Link, useLocation } from "react-router-dom";
import { blogConfig } from "@/data/blogConfig";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-slate-800 hover:text-slate-600 transition-colors">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">{blogConfig.site.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-6">
            {blogConfig.navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-slate-900 font-medium"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden py-3 border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {blogConfig.navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-2 py-2 text-sm rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
