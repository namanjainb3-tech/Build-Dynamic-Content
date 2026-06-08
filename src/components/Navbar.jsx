import React from 'react';
import { Layout, RotateCcw, Sun, Moon } from 'lucide-react';

export default function Navbar({ count, darkMode, setDarkMode, onReset }) {
  return (
    <nav className={`navbar border-bottom px-3 px-md-4 flex-shrink-0 ${darkMode ? 'bg-dark border-secondary text-white' : 'bg-white text-dark border-light-subtle'}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center flex-nowrap p-0">
        
        {/* Brand Logo & Name */}
        <span className={`navbar-brand fw-bold d-flex align-items-center gap-2 m-0 ${darkMode ? 'text-white' : 'text-dark'}`}>
          <div className="bg-primary p-2 rounded text-white d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
            <Layout size={16}/>
          </div>
          <span className="fs-5 tracking-tight">
            Builder<span className="text-primary">Pro</span>
          </span>
          <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle ms-2 px-2.5 py-1 rounded-pill" style={{ fontSize: '11px' }}>
            {count}
          </span>
        </span>
        
        {/* Enhanced Controls Panel */}
        <div className="d-flex gap-2 align-items-center flex-shrink-0">
          
          {/* Reset Button */}
          <button 
            className={`btn d-flex align-items-center justify-content-center border-0 p-2 rounded-3 transition-all ${
              darkMode 
                ? 'btn-outline-danger text-danger bg-danger bg-opacity-10' 
                : 'bg-danger-subtle text-danger'
            }`}
            onClick={onReset} 
            title="Reset Canvas"
            style={{ 
              width: '36px', 
              height: '36px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              if(!darkMode) e.currentTarget.style.backgroundColor = '#f8d7da';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              if(!darkMode) e.currentTarget.style.backgroundColor = '';
            }}
          >
            <RotateCcw size={16} strokeWidth={2.5} />
          </button>
          
          {/* Theme Switcher Button */}
          <button 
            className={`btn d-flex align-items-center justify-content-center border p-2 rounded-3 ${
              darkMode 
                ? 'btn-warning text-dark border-warning' 
                : 'bg-light text-dark border-secondary-subtle shadow-sm'
            }`} 
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{ 
              width: '36px', 
              height: '36px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              if(!darkMode) e.currentTarget.style.backgroundColor = '#e2e8f0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              if(!darkMode) e.currentTarget.style.backgroundColor = '';
            }}
          >
            {darkMode ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
          </button>
          
        </div>

      </div>
    </nav>
  );
}