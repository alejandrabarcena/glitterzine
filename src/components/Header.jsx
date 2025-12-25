import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Heart, Wrench, BookOpen, Users, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 transform -rotate-1">
            <span className="inline-block bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-black px-4 py-2 transform rotate-2 shadow-lg text-5xl md:text-7xl">
              GLITTERZINE
            </span>
            <br />
            <span className="inline-block bg-black text-yellow-300 px-4 py-2 transform rotate-1 shadow-lg mt-2 text-3xl md:text-5xl">
              FANZINE GLITTER
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 transform -rotate-2 shadow-lg mt-2 text-3xl md:text-5xl">
              REBELLION
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-6 transform rotate-1 bg-black/50 inline-block px-4 py-2 rounded">
            FANZINE GLITTER REBELLION • CULTURA ALTERNATIVA • UNDERGROUND
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
            <Link to="/login" className="bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded-full flex items-center gap-1 transition-colors">
              <Heart className="w-4 h-4" /> LGBTQ+
            </Link>
            <span className="bg-purple-600 px-3 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-4 h-4" /> NEURODIVERGENTE
            </span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full flex items-center gap-1">
              <Wrench className="w-4 h-4" /> MAKER
            </span>
            <span className="bg-yellow-600 px-3 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-4 h-4" /> PUNK
            </span>
            <span className="bg-green-600 px-3 py-1 rounded-full flex items-center gap-1">
              <BookOpen className="w-4 h-4" /> LIBROS
            </span>
            <span className="bg-red-600 px-3 py-1 rounded-full flex items-center gap-1">
              <Users className="w-4 h-4" /> REDES ALT
            </span>
            <Link to="/signup" className="bg-black hover:bg-gray-800 px-4 py-1 rounded-full flex items-center gap-1 transition-colors">
              <Sparkles className="w-4 h-4" /> ÚNETE
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-70"></div>
        <div className="absolute top-12 right-8 w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-8 left-12 w-10 h-10 bg-cyan-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 bg-purple-400 rounded-full opacity-80"></div>
      </div>
    </header>
  );
};

export default Header;