import React, { useState, useEffect } from 'react';
import { TYPES, STORAGE_KEY, THEME_KEY } from './utils/Types';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ContentBlock from './components/ContentBlock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Make sure your CSS file is imported here!

export default function App() {
  const [blocks, setBlocks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? JSON.parse(saved) : true;
  });

  const [draggedIdx, setDraggedIdx] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
  }, [blocks]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(darkMode));
    document.body.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    document.body.style.backgroundColor = darkMode ? '#0f172a' : '#f8fafc';
  }, [darkMode]);

  const addBlock = (type) => {
    const newBlock = {
      id: Date.now(),
      type,
      content: type === TYPES.IMAGE 
        ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800' 
        : type === TYPES.HEADER ? 'New Heading' : 'Type your text here...',
    };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id, val) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: val } : b));
  };

  const deleteBlock = (id) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  const onDragStart = (idx) => setDraggedIdx(idx);
  
  const onDragOver = (e, targetIdx) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === targetIdx) return;
    
    const items = [...blocks];
    const currentItem = items[draggedIdx];
    
    items.splice(draggedIdx, 1);
    items.splice(targetIdx, 0, currentItem);
    
    setDraggedIdx(targetIdx);
    setBlocks(items);
  };

  return (
    <div className="app-viewport">
      <Navbar 
        count={blocks.length} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onReset={() => setBlocks([])} 
      />
      
      <div className="builder-layout">
        <Sidebar onAdd={addBlock} darkMode={darkMode} />
        
        <main className="builder-main" style={{
          backgroundImage: darkMode 
            ? 'radial-gradient(#1e293b 1px, transparent 1px)' 
            : 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}>
          <div className="mx-auto px-3" style={{ maxWidth: '750px', width: '100%' }}>
            {blocks.length === 0 ? (
              <div className={`text-center py-5 border rounded-5 border-2 border-dashed mt-5 empty-canvas-area ${darkMode ? 'text-white border-secondary' : 'text-dark border-secondary-subtle'}`}>
                <p className="fw-medium m-0">Canvas is empty. Click elements from the sidebar to start building.</p>
              </div>
            ) : (
              blocks.map((block, index) => (
                <ContentBlock 
                  key={block.id}
                  block={block}
                  index={index}
                  isDragging={draggedIdx === index}
                  onUpdate={updateBlock}
                  onDelete={deleteBlock}
                  onDragStart={onDragStart}
                  onDragOver={onDragOver}
                  onDragEnd={() => setDraggedIdx(null)}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}


