import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import CheeseCard from '../components/CheeseCard';
import Cart from '../components/Cart';
import CheeseFilter from '../components/CheeseFilter';
import { cheeses } from '../data/cheeses';
import { Cheese } from '../types/cheese';

const Index = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedIntensity, setSelectedIntensity] = useState<number | null>(null);

  console.log('Rendering Index page with', cheeses.length, 'cheeses');
  console.log('Current filters - Type:', selectedType, 'Intensity:', selectedIntensity);

  const filteredCheeses = useMemo(() => {
    let filtered = cheeses;

    if (selectedType) {
      filtered = filtered.filter(cheese => cheese.type === selectedType);
    }

    if (selectedIntensity) {
      filtered = filtered.filter(cheese => cheese.intensity === selectedIntensity);
    }

    console.log('Filtered cheeses:', filtered.length);
    return filtered;
  }, [selectedType, selectedIntensity]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <CheeseFilter
                  selectedType={selectedType}
                  onTypeChange={setSelectedType}
                  selectedIntensity={selectedIntensity}
                  onIntensityChange={setSelectedIntensity}
                />
                <Cart />
              </div>
            </div>

            {/* Catálogo de productos */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Nuestros Quesos Artesanales
                </h2>
                <p className="text-gray-600">
                  Descubre nuestra selección de quesos premium de todo el mundo
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  Mostrando {filteredCheeses.length} de {cheeses.length} productos
                </div>
              </div>

              {filteredCheeses.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-500 mb-4">
                    No se encontraron quesos con los filtros seleccionados
                  </p>
                  <button
                    onClick={() => {
                      setSelectedType(null);
                      setSelectedIntensity(null);
                    }}
                    className="text-amber-600 hover:text-amber-700 underline"
                  >
                    Limpiar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCheeses.map((cheese) => (
                    <CheeseCard key={cheese.id} cheese={cheese} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-2">Quesería Artesanal</h3>
            <p className="text-gray-300">
              Ofrecemos los mejores quesos artesanales con más de 20 años de experiencia
            </p>
            <p className="text-gray-400 mt-4 text-sm">
              © 2024 Quesería Artesanal. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;