import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

const ArticleCard = ({
  title,
  excerpt,
  author,
  date,
  category,
  categoryColor,
  image
}) => {
  return (
    <article className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1">
      {image && (
        <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wide text-black ${categoryColor} transform -rotate-1`}>
              {category}
            </span>
          </div>
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-black mb-3 leading-tight transform -rotate-1 hover:rotate-0 transition-transform duration-200">
          {title}
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span className="font-bold">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            <span className={`px-2 py-1 rounded text-black font-bold ${categoryColor}`}>
              {category}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;