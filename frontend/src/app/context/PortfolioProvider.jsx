import React, { useState, useEffect } from 'react';
import PortfolioContext from './portfolioContext';


// Initial mock data
const initialProjects = [
  {
    id: '1',
    title: 'Urban Landscapes',
    description: 'Capturing the essence of modern city life through architectural photography',
    category: 'Architecture',
    coverImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
    images: [
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    ],
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Natural Portraits',
    description: 'Authentic portraits capturing genuine human emotions and expressions',
    category: 'Portrait',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800'
    ],
    date: '2024-02-20'
  },
  {
    id: '3',
    title: 'Wilderness Adventure',
    description: 'Exploring untouched natural landscapes and wildlife',
    category: 'Nature',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800'
    ],
    date: '2024-03-10'
  },
  {
    id: '4',
    title: 'Wedding Memories',
    description: 'Documenting beautiful moments of love and celebration',
    category: 'Wedding',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800'
    ],
    date: '2023-12-05'
  },
  {
    id: '5',
    title: 'Street Stories',
    description: 'Candid moments from urban streets and everyday life',
    category: 'Street',
    coverImage: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800',
    images: [
      'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800'
    ],
    date: '2024-01-28'
  },
  {
    id: '6',
    title: 'Product Showcase',
    description: 'Commercial product photography with creative lighting',
    category: 'Commercial',
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800'
    ],
    date: '2024-02-14'
  }
];

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    // load stored projects
    const storedProjects = localStorage.getItem('portfolioProjects');
    return setProjects ? JSON.parse(storedProjects) : initialProjects;
  });


  useEffect(() => {
    // Save to localStorage whenever projects change
    if (projects.length > 0) {
      localStorage.setItem('portfolioProjects', JSON.stringify(projects));
    }
  }, [projects]);

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now().toString()
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const updateProject = (id, updates) => {
    setProjects(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  return (
    <PortfolioContext.Provider value={{ projects, addProject, deleteProject, updateProject }}>
      {children}
    </PortfolioContext.Provider>
  );
}


