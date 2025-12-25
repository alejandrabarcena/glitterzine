import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const BookRecommendation = ({
  title,
  author,
  description,
  rating,
  category,
  categoryColor
}) => {
  return (
    <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <span className={`px-3 py-1 text-xs font-black uppercase tracking-wide text-black ${categoryColor} transform -rotate-2`}>
          {category}
        </span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
      <h3 className="text-xl font-black mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 font-bold mb-3">
        por {author}
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        {description}
      </p>
      <button className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 transform hover:scale-105">
        LEER MÁS
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
};

export default BookRecommendation;