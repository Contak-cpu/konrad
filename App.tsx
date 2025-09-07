import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyGrid from './components/PropertyGrid';
import PropertyDetail from './components/PropertyDetail';
import RequirementsSection from './components/RequirementsSection';
import ContactSection from './components/ContactSection';
import SalesSection from './components/SalesSection';
import Footer from './components/Footer';
import { properties as allProperties } from './constants';
import type { Property, Filters, SortOption } from './types';

// This defines the possible main views of the application.
type View = 'home' | 'requisitos' | 'contacto' | 'ventas';

// Levenshtein distance function for fuzzy matching.
// A lower number means the strings are more similar.
const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

// Home component with property listing
const HomePage: React.FC = () => {
  // State to hold the property selected for detailed view. Null means no property is selected.
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  // State for property filters, initialized to show all properties.
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    type: 'Todos',
    rooms: 'Todos',
    availability: 'Todos',
    priceRange: 'all',
    operation: 'Todos',
  });
  // State for sorting properties.
  const [sort, setSort] = useState<SortOption>('default');

  // Memoized calculation to filter and sort properties whenever filters or sort order change.
  const filteredProperties = useMemo(() => {
    let filtered = allProperties.filter(property => {
      // Fuzzy Search Term filter (title or address)
      const searchTerm = filters.searchTerm.toLowerCase().trim();
      const searchTermMatch = (() => {
          if (!searchTerm) return true;
          const title = property.title.toLowerCase();
          const address = property.address.toLowerCase();

          // Fast path for direct match
          if (title.includes(searchTerm) || address.includes(searchTerm)) {
              return true;
          }

          // Fuzzy match logic for typo tolerance
          const searchWords = searchTerm.split(' ').filter(w => w.length > 2);
          const propertyWords = [...new Set(`${title} ${address}`.split(' '))];

          return searchWords.every(searchWord => 
              propertyWords.some(propWord => {
                  // Allow for 1 typo in short words, 2 in longer words
                  const threshold = searchWord.length > 4 ? 2 : 1;
                  return levenshteinDistance(searchWord, propWord) <= threshold || propWord.startsWith(searchWord);
              })
          );
      })();

      // Property type filter
      const typeMatch = filters.type === 'Todos' || property.type === filters.type;

      // Number of rooms filter
      const roomsMatch =
        filters.rooms === 'Todos' ||
        (filters.rooms === '0' && property.rooms === 0) ||
        (filters.rooms === '1' && property.rooms === 1) ||
        (filters.rooms === '2' && property.rooms === 2) ||
        (filters.rooms === '3' && property.rooms >= 3);
        
      // Availability filter
      const availabilityMatch = filters.availability === 'Todos' || property.available === filters.availability;
      
      // Price range filter
      const priceRangeMatch = (() => {
          if (filters.priceRange === 'all') return true;
          const [min, max] = filters.priceRange.split('-').map(Number);
          return property.price >= min && property.price <= max;
      })();

      // Operation filter (Alquiler/Venta)
      const operationMatch = filters.operation === 'Todos' || property.operation === filters.operation;

      return searchTermMatch && typeMatch && roomsMatch && availabilityMatch && priceRangeMatch && operationMatch;
    });
    
    // Apply sorting to the filtered list
    if (sort === 'price_asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [filters, sort]);

  // Handler to set the selected property and switch to detail view.
  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  // Handler to clear the selected property and return to the property list.
  const handleBackToListing = () => {
    setSelectedProperty(null);
  };
  
  // If a property is selected, render the detail view.
  if (selectedProperty) {
    return <PropertyDetail property={selectedProperty} onBack={handleBackToListing} />;
  }

  return (
    <>
      <Hero filters={filters} setFilters={setFilters} />
      <PropertyGrid 
        properties={filteredProperties} 
        onSelectProperty={handleSelectProperty} 
        sort={sort}
        setSort={setSort}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current view from URL
  const getCurrentView = (): View => {
    const path = location.pathname;
    if (path === '/requisitos') return 'requisitos';
    if (path === '/contacto') return 'contacto';
    if (path === '/ventas') return 'ventas';
    return 'home';
  };

  const currentView = getCurrentView();

  // Handler to change view and navigate
  const handleViewChange = (view: View) => {
    if (view === 'home') {
      navigate('/');
    } else {
      navigate(`/${view}`);
    }
  };

  // Effect to scroll to the top of the page when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onViewChange={handleViewChange} currentView={currentView} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/requisitos" element={<RequirementsSection />} />
          <Route path="/contacto" element={<ContactSection />} />
          <Route path="/ventas" element={<SalesSection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
