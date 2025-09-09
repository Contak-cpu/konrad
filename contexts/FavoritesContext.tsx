import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Property } from '../types';

const FAVORITES_KEY = 'konrad-favorites';

interface FavoritesContextType {
  favorites: number[];
  addToFavorites: (propertyId: number) => void;
  removeFromFavorites: (propertyId: number) => void;
  toggleFavorite: (propertyId: number) => void;
  isFavorite: (propertyId: number) => boolean;
  getFavoriteProperties: (allProperties: Property[]) => Property[];
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Cargar favoritos del localStorage al montar el componente
  useEffect(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        console.log('Cargando favoritos desde localStorage:', parsedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
        setFavorites([]);
      }
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    console.log('Guardando favoritos en localStorage:', favorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (propertyId: number) => {
    console.log('Agregando a favoritos:', propertyId);
    setFavorites(prev => {
      if (!prev.includes(propertyId)) {
        const newFavorites = [...prev, propertyId];
        console.log('Nuevos favoritos:', newFavorites);
        return newFavorites;
      }
      return prev;
    });
  };

  const removeFromFavorites = (propertyId: number) => {
    console.log('Removiendo de favoritos:', propertyId);
    setFavorites(prev => {
      const newFavorites = prev.filter(id => id !== propertyId);
      console.log('Favoritos después de remover:', newFavorites);
      return newFavorites;
    });
  };

  const toggleFavorite = (propertyId: number) => {
    console.log('Toggle favorite para propiedad:', propertyId);
    console.log('Favoritos actuales:', favorites);
    if (favorites.includes(propertyId)) {
      removeFromFavorites(propertyId);
    } else {
      addToFavorites(propertyId);
    }
  };

  const isFavorite = (propertyId: number) => {
    const result = favorites.includes(propertyId);
    console.log(`¿Es favorita la propiedad ${propertyId}?`, result);
    return result;
  };

  const getFavoriteProperties = (allProperties: Property[]) => {
    const result = allProperties.filter(property => favorites.includes(property.id));
    console.log('Propiedades favoritas encontradas:', result.length);
    console.log('IDs de favoritos:', favorites);
    console.log('Propiedades disponibles:', allProperties.map(p => p.id));
    return result;
  };

  const value: FavoritesContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoriteProperties
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider');
  }
  return context;
};
