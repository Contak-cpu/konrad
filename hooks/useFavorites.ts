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

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    getFavoriteProperties
  };
};


