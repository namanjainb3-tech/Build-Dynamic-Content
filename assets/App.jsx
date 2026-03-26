import React, { useState, useEffect } from 'react';
import { TYPES, STORAGE_KEY, THEME_KEY } from './Types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ContentBlock from './ContentBlock';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  // 1. Initialize state from LocalStorage
  const [blocks, setBlocks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? JSON.parse(saved) : true;
  });

  const [draggedIdx, setDraggedIdx] = useState(null);

  // 2. Persistence Sync
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
  }, [blocks]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(darkMode));
    document.body.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    // Set a solid background for the body based on theme
    document.body.style.backgroundColor = darkMode ? '#0f172a' : '#f8fafc';
  }, [darkMode]);

  // 3. Block Handlers
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

  // 4. Native Drag & Drop Logic
  const onDragStart = (idx) => setDraggedIdx(idx);
  
  const onDragOver = (e, idx) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    
    const items = [...blocks];
    const item = items.splice(draggedIdx, 1)[0];
    items.splice(idx, 0, item);
    
    setDraggedIdx(idx);
    setBlocks(items);
  };

  return (
    <div className="vh-100 d-flex flex-column">
      <Navbar 
        count={blocks.length} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onReset={() => setBlocks([])} 
      />
      
      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar onAdd={addBlock} darkMode={darkMode} />
        
        <main className="flex-grow-1 overflow-auto p-5" style={{
          backgroundImage: darkMode 
            ? 'radial-gradient(#1e293b 1px, transparent 1px)' 
            : 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}>
          <div className="mx-auto" style={{ maxWidth: '750px' }}>
            {blocks.length === 0 ? (
              <div className={`text-center py-5 border rounded-5 border-2 border-dashed mt-5 opacity-50 ${darkMode ? 'text-white' : 'text-dark'}`}>
                <p className="fw-medium">Canvas is empty. Add elements from the sidebar to start building.</p>
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


