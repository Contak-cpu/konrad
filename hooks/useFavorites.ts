import { useState, useEffect } from 'react';
import type { Property } from '../types';

const FAVORITES_KEY = 'konrad-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Cargar favoritos del localStorage al montar el componente
  useEffect(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
        setFavorites([]);
      }
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (propertyId: number) => {
    setFavorites(prev => {
      if (!prev.includes(propertyId)) {
        return [...prev, propertyId];
      }
      return prev;
    });
  };

  const removeFromFavorites = (propertyId: number) => {
    setFavorites(prev => prev.filter(id => id !== propertyId));
  };

  const toggleFavorite = (propertyId: number) => {
    if (favorites.includes(propertyId)) {
      removeFromFavorites(propertyId);
    } else {
      addToFavorites(propertyId);
    }
  };

  const isFavorite = (propertyId: number) => {
    return favorites.includes(propertyId);
  };

  const getFavoriteProperties = (allProperties: Property[]) => {
    return allProperties.filter(property => favorites.includes(property.id));
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoriteProperties
  };
};


