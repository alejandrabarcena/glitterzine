import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Crown, 
  Heart, 
  Zap, 
  Users, 
  BookOpen, 
  Music,
  Sparkles,
  Settings,
  LogOut,
  Plus,
  Edit3,
  Trash2
} from 'lucide-react';
import axios from 'axios';

const Private = () => {
  const { user, logout } = useAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de artículos del usuario
    const loadUserContent = async () => {
      try {
        // Aquí harías una llamada real a tu API
        // const response = await axios.get('http://localhost:5000/api/user-articles');
        
        // Por ahora, datos simulados
        setArticles([
          {
            id: 1,
            title: "Mi primer artículo punk",
            category: "NEUROSPICY",
            status: "Publicado",
            views: 156,
            date: "2025-01-15"
          },
          {
            id: 2,
            title: "Tutorial DIY: Chaqueta customizada",
            category: "FASHION",
            status: "Borrador",
            views: 0,
            date: "2025-01-14"
          }
        ]);
      } catch (error) {
        console.error('Error cargando contenido:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserContent();
  }, []);

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-xl font-bold text-gray-700">Cargando tu espacio rebelde...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      {/* Header Privado */}
      <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black transform -rotate-1">
                <span className="bg-black text-pink-400 px-3 py-1 inline-block transform rotate-2">
                  ÁREA PRIVADA
                </span>
              </h1>
              <p className="text-lg font-bold mt-2">
                ¡Bienvenido/a, {user?.email}! 🎨
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white/20 px-4 py-2 rounded-full font-bold hover:bg-white/30 transition-colors flex items-center gap-2">
                <Settings className="w-4 h-4" />
                CONFIGURACIÓN
              </button>
              <button 
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-full font-bold hover:bg-red-600 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                CERRAR SESIÓN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-pink-200 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-600" />
              <div>
                <p className="text-2xl font-black">2</p>
                <p className="text-sm font-bold">ARTÍCULOS</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-200 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-2xl font-black">156</p>
                <p className="text-sm font-bold">VISTAS</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-200 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-cyan-600" />
              <div>
                <p className="text-2xl font-black">23</p>
                <p className="text-sm font-bold">SEGUIDORES</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-200 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-black">5</p>
                <p className="text-sm font-bold">LIKES</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones Rápidas */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-pink-500" />
            ACCIONES RÁPIDAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1 text-left">
              <Plus className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-black mb-2">NUEVO ARTÍCULO</h3>
              <p className="text-gray-600 font-bold">Comparte tu rebeldía con la comunidad</p>
            </button>
            
            <button className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1 text-left">
              <Music className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-black mb-2">SUBIR MIX</h3>
              <p className="text-gray-600 font-bold">Comparte tus beats underground</p>
            </button>
            
            <button className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1 text-left">
              <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-black mb-2">RECOMENDAR LIBRO</h3>
              <p className="text-gray-600 font-bold">Sugiere lecturas rebeldes</p>
            </button>
          </div>
        </section>

        {/* Mis Artículos */}
        <section>
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <Edit3 className="w-8 h-8 text-purple-500" />
            MIS ARTÍCULOS
          </h2>
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-black">{article.title}</h3>
                      <span className={`px-3 py-1 text-xs font-black uppercase ${
                        article.status === 'Publicado' ? 'bg-green-400' : 'bg-yellow-400'
                      } text-black`}>
                        {article.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="font-bold">Categoría: {article.category}</span>
                      <span className="font-bold">Vistas: {article.views}</span>
                      <span className="font-bold">Fecha: {article.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="bg-red-500 text-white p-2 hover:bg-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Private;