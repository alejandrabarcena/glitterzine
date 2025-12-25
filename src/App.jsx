import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import Private from './components/Private';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';
import CategorySection from './components/CategorySection';
import BookRecommendation from './components/BookRecommendation';
import SocialNetworkCard from './components/SocialNetworkCard';
import { 
  Heart, 
  Sparkles, 
  Wrench, 
  Zap, 
  BookOpen, 
  Users,
  Recycle,
  Scissors,
  Music,
  Headphones,
  Crown
} from 'lucide-react';

function PublicFanzine() {
  const neurospicyArticles = [
    {
      title: "NEUROSPICY y Creatividad: Rompiendo Moldes",
      excerpt: "Exploramos cómo las mentes neurodivergentes están revolucionando el arte, la tecnología y la cultura punk con perspectivas únicas.",
      author: "Alex Rivera",
      date: "15 Ene 2025",
      category: "NEUROSPICY",
      categoryColor: "bg-purple-400"
    },
    {
      title: "ADHD y Arte: Hiperfoco Creativo",
      excerpt: "Cómo el ADHD puede ser una superpotencia creativa en el mundo del arte y la música underground.",
      author: "Sam Chen",
      date: "12 Ene 2025",
      category: "NEUROSPICY",
      categoryColor: "bg-purple-400"
    },
    {
      title: "Autismo y Música: Patrones Únicos",
      excerpt: "La perspectiva autista en la creación musical está generando sonidos completamente nuevos.",
      author: "Jordan Martinez",
      date: "10 Ene 2025",
      category: "NEUROSPICY",
      categoryColor: "bg-purple-400"
    }
  ];

  const queerArticles = [
    {
      title: "Ballroom: Arte, Resistencia y Familia",
      excerpt: "La cultura ballroom como espacio de sanación y expresión para la comunidad LGBTQ+ latina y afro.",
      author: "Valentina Fierce",
      date: "14 Ene 2025",
      category: "BALLROOM",
      categoryColor: "bg-pink-400"
    },
    {
      title: "Identidades Fluidas en el Punk Queer",
      excerpt: "Cómo el punk se convierte en refugio para identidades no binarias y expresiones de género diversas.",
      author: "River Storm",
      date: "11 Ene 2025",
      category: "QUEER PUNK",
      categoryColor: "bg-pink-400"
    },
    {
      title: "Amor Queer en Tiempos de Resistencia",
      excerpt: "Historias reales de amor y activismo en la comunidad LGBTQ+ que están cambiando el mundo.",
      author: "Phoenix Luna",
      date: "9 Ene 2025",
      category: "QUEER POWER",
      categoryColor: "bg-pink-400"
    }
  ];

  const fashionArticles = [
    {
      title: "Upcycling Punk: De Basura a Tesoro",
      excerpt: "Transforma ropa vieja en piezas únicas con técnicas de customización punk y sostenibilidad radical.",
      author: "Riley Storm",
      date: "8 Ene 2025",
      category: "UPCYCLING",
      categoryColor: "bg-green-400"
    },
    {
      title: "Moda Queer: Rompiendo Binarios",
      excerpt: "Explora cómo la moda se convierte en herramienta de expresión y resistencia para identidades no binarias.",
      author: "Phoenix Luna",
      date: "5 Ene 2025",
      category: "FASHION",
      categoryColor: "bg-green-400"
    },
    {
      title: "DIY Punk: Construye Tu Propia Identidad",
      excerpt: "Guía completa para crear tu estilo punk auténtico usando técnicas de upcycling y filosofía maker.",
      author: "Rebel Maker",
      date: "3 Ene 2025",
      category: "DIY",
      categoryColor: "bg-green-400"
    }
  ];

  const musicArticles = [
    {
      title: "Sonidero Rebelde: Cumbia Punk Alternativa",
      excerpt: "La fusión de cumbia tradicional con actitud punk está creando una nueva ola musical underground.",
      author: "DJ Rebelde",
      date: "13 Ene 2025",
      category: "SONIDERO",
      categoryColor: "bg-yellow-400"
    },
    {
      title: "DJs Independientes: Resistencia Sonora",
      excerpt: "Perfiles de DJs que están rompiendo las reglas y creando espacios seguros en la escena electrónica.",
      author: "Beat Warrior",
      date: "9 Ene 2025",
      category: "DJ INDIE",
      categoryColor: "bg-yellow-400"
    },
    {
      title: "Reggaeton Queer: Nuevas Voces",
      excerpt: "Artistas queer están transformando el reggaeton con letras inclusivas y beats revolucionarios.",
      author: "MC Diverso",
      date: "6 Ene 2025",
      category: "REGGAETON",
      categoryColor: "bg-yellow-400"
    }
  ];

  const books = [
    {
      title: "Neurotribes",
      author: "Steve Silberman",
      description: "Una exploración revolucionaria del autismo y la neurodiversidad que cambió la conversación mundial.",
      rating: 5,
      category: "NEUROSPICY",
      categoryColor: "bg-purple-400"
    },
    {
      title: "Stone Butch Blues",
      author: "Leslie Feinberg",
      description: "Una novela poderosa sobre identidad de género, clase trabajadora y resistencia queer.",
      rating: 5,
      category: "QUEER",
      categoryColor: "bg-pink-400"
    },
    {
      title: "The Maker Movement Manifesto",
      author: "Mark Hatch",
      description: "Los principios fundamentales de la cultura maker y cómo está transformando la sociedad.",
      rating: 4,
      category: "MAKER",
      categoryColor: "bg-cyan-400"
    },
    {
      title: "Ballroom Culture and the Politics of Realness",
      author: "Marlon M. Bailey",
      description: "Un análisis profundo de la cultura ballroom y su impacto en las comunidades queer de color.",
      rating: 5,
      category: "BALLROOM",
      categoryColor: "bg-pink-400"
    },
    {
      title: "Punk Rock: An Oral History",
      author: "John Robb",
      description: "La historia definitiva del punk contada por quienes la vivieron, desde los Sex Pistols hasta hoy.",
      rating: 4,
      category: "PUNK",
      categoryColor: "bg-red-400"
    },
    {
      title: "Gender Trouble",
      author: "Judith Butler",
      description: "El texto fundamental sobre teoría queer que revolucionó nuestra comprensión del género.",
      rating: 5,
      category: "TEORÍA QUEER",
      categoryColor: "bg-pink-400"
    }
  ];

  const socialNetworks = [
    {
      name: "Pinterest",
      description: "Inspírate con ideas DIY, moda punk y proyectos creativos de la comunidad maker.",
      features: ["Ideas DIY", "Moda alternativa", "Proyectos maker", "Inspiración visual"],
      color: "text-red-600",
      bgColor: "bg-red-200"
    },
    {
      name: "TikTok",
      description: "Comparte tu creatividad punk, tutoriales DIY y momentos auténticos.",
      features: ["Videos creativos", "Tutoriales DIY", "Comunidad joven", "Tendencias alternativas"],
      color: "text-black",
      bgColor: "bg-gray-200"
    },
    {
      name: "Fandom",
      description: "Conecta con comunidades de tus fandoms favoritos y crea contenido colaborativo.",
      features: ["Wikis colaborativas", "Comunidades temáticas", "Contenido fan", "Conocimiento compartido"],
      color: "text-blue-600",
      bgColor: "bg-blue-200"
    },
    {
      name: "The Diaspora* Project",
      description: "Plataforma distribuida que te da control total sobre tus datos y privacidad.",
      features: ["Datos propios", "Sin censura", "Pods independientes", "Privacidad total"],
      color: "text-green-600",
      bgColor: "bg-green-200"
    },
    {
      name: "SoundCloud",
      description: "Plataforma perfecta para DJs indie, sonideros y artistas underground.",
      features: ["Música independiente", "DJs underground", "Sonideros rebeldes", "Comunidad musical"],
      color: "text-orange-600",
      bgColor: "bg-orange-200"
    },
    {
      name: "Mastodon",
      description: "Red social descentralizada sin algoritmos tóxicos ni publicidad invasiva.",
      features: ["Descentralizada", "Open Source", "Sin anuncios", "Comunidades temáticas"],
      color: "text-purple-600",
      bgColor: "bg-purple-200"
    }
  ];

  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* NEUROSPICY Section */}
        <CategorySection
          title="NEUROSPICY"
          icon={Zap}
          color="text-purple-600"
          bgColor="bg-purple-300"
        >
          {neurospicyArticles.map((article, index) => (
            <ArticleCard key={index} {...article} image="neurospicy" />
          ))}
        </CategorySection>

        {/* QUEER POWER Section */}
        <CategorySection
          title="QUEER POWER"
          icon={Heart}
          color="text-pink-600"
          bgColor="bg-pink-300"
        >
          {queerArticles.map((article, index) => (
            <ArticleCard key={index} {...article} image="queer" />
          ))}
          <div className="bg-gradient-to-br from-pink-200 to-purple-200 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1">
            <div className="text-center">
              <Crown className="w-16 h-16 mx-auto mb-4 text-pink-600" />
              <h3 className="text-xl font-black mb-3">BALLROOM SPOTLIGHT</h3>
              <p className="text-gray-700 mb-4">
                Celebramos las casas, las madres y la realness que define nuestra comunidad ballroom.
              </p>
              <button className="bg-pink-500 text-white px-4 py-2 font-bold hover:bg-pink-400 transition-colors duration-200 transform hover:scale-105">
                WORK IT!
              </button>
            </div>
          </div>
        </CategorySection>

        {/* FASHION UPCYCLING Section */}
        <CategorySection
          title="FASHION UPCYCLING"
          icon={Scissors}
          color="text-green-600"
          bgColor="bg-green-300"
        >
          {fashionArticles.map((article, index) => (
            <ArticleCard key={index} {...article} image="fashion" />
          ))}
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1">
            <div className="text-center">
              <Recycle className="w-16 h-16 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-black mb-3">TUTORIAL SEMANAL</h3>
              <p className="text-gray-700 mb-4">
                Aprende a transformar una camiseta básica en una pieza punk única con tachuelas y parches DIY.
              </p>
              <button className="bg-green-500 text-black px-4 py-2 font-bold hover:bg-green-400 transition-colors duration-200 transform hover:scale-105">
                VER TUTORIAL
              </button>
            </div>
          </div>
        </CategorySection>

        {/* SONIDERO & DJS INDIE Section */}
        <CategorySection
          title="SONIDERO & DJS INDIE"
          icon={Music}
          color="text-orange-600"
          bgColor="bg-orange-300"
        >
          {musicArticles.map((article, index) => (
            <ArticleCard key={index} {...article} image="music" />
          ))}
          <div className="bg-gradient-to-br from-orange-200 to-yellow-200 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1">
            <div className="text-center">
              <Headphones className="w-16 h-16 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-black mb-3">MIX DE LA SEMANA</h3>
              <p className="text-gray-700 mb-4">
                Descubre los beats más rebeldes de la escena underground latina.
              </p>
              <button className="bg-orange-500 text-black px-4 py-2 font-bold hover:bg-orange-400 transition-colors duration-200 transform hover:scale-105">
                ESCUCHAR
              </button>
            </div>
          </div>
        </CategorySection>

        {/* LIBROS Section */}
        <CategorySection
          title="LIBROS"
          icon={BookOpen}
          color="text-red-600"
          bgColor="bg-red-300"
        >
          {books.map((book, index) => (
            <BookRecommendation key={index} {...book} />
          ))}
        </CategorySection>

        {/* REDES SOCIALES Section */}
        <CategorySection
          title="REDES SOCIALES"
          icon={Users}
          color="text-indigo-600"
          bgColor="bg-indigo-300"
        >
          {socialNetworks.map((network, index) => (
            <SocialNetworkCard key={index} {...network} />
          ))}
        </CategorySection>

        {/* Community Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 border-4 border-black p-8 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center transform rotate-1">
              <h2 className="text-4xl font-black text-white mb-4">
                ¡ÚNETE A LA REVOLUCIÓN!
              </h2>
              <p className="text-xl text-white mb-6 font-bold">
                Comparte tu historia, tus creaciones, tu rebeldía
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-black px-6 py-3 font-black hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  ENVIAR ARTÍCULO
                </button>
                <button className="bg-black text-white px-6 py-3 font-black hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  UNIRSE AL FORO
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
          <Routes>
            <Route path="/" element={<PublicFanzine />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/private" 
              element={
                <ProtectedRoute>
                  <Private />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;