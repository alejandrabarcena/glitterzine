import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);

    const result = await signup(email, password);
    
    if (result.success) {
      // Redirigir al login después del registro exitoso
      navigate('/login', { 
        state: { 
          message: 'Cuenta creada exitosamente. Ahora puedes iniciar sesión.' 
        }
      });
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2 transform -rotate-1">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-black px-4 py-2 inline-block transform rotate-2 text-2xl">
              GLITTERZINE
            </span>
          </h1>
          <p className="text-gray-600 font-bold">Únete a la revolución rebelde</p>
        </div>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <div className="flex items-center gap-3 mb-6">
            <UserPlus className="w-8 h-8 text-purple-500" />
            <h2 className="text-2xl font-black">REGISTRO</h2>
          </div>

          {error && (
            <div className="bg-red-100 border-2 border-red-500 p-4 mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 font-bold">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black focus:border-purple-500 focus:outline-none font-bold"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                CONTRASEÑA
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black focus:border-purple-500 focus:outline-none font-bold"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                CONFIRMAR CONTRASEÑA
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black focus:border-purple-500 focus:outline-none font-bold"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 text-white py-3 px-6 font-black hover:bg-purple-600 transition-colors duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'CREANDO CUENTA...' : 'CREAR CUENTA'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-purple-500 font-bold hover:text-purple-600">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            ← Volver al fanzine público
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;