import React from 'react';
import { Heart, Zap, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black mb-4 transform -rotate-1">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-black px-4 py-2 inline-block transform rotate-2 text-xl">
              GLITTERZINE
            </span>
          </h3>
          <p className="text-lg font-bold mb-6">
            Fanzine digital para mentes rebeldes y corazones diversos
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5" />
              <span className="font-bold">AMOR</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5" />
              <span className="font-bold">REBELDÍA</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-full">
              <Users className="w-5 h-5" />
              <span className="font-bold">COMUNIDAD</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Fanzine Glitter Rebellion • Hecho con ❤️ para la comunidad alternativa
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Un espacio seguro para todas las identidades, neurodivergencias y expresiones creativas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;