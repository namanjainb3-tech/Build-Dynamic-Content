import { Layout, RotateCcw, Sun, Moon } from 'lucide-react';

export default function Navbar({ count, darkMode, setDarkMode, onReset }) {
  return (
    <nav className={`navbar border-bottom px-4 flex-shrink-0 ${darkMode ? 'bg-dark border-secondary' : 'bg-white'}`}>
      <div className="container-fluid">
        <span className="navbar-brand fw-bold d-flex align-items-center gap-2 m-0 text-white">
          <div className="bg-primary p-1 rounded"><Layout size={18}/></div>
          Builder<span className="text-primary">Pro</span>
          <span className="badge bg-secondary ms-2" style={{fontSize: '10px'}}>{count} Blocks</span>
        </span>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-danger" onClick={onReset} title="Reset Canvas">
            <RotateCcw size={14}/>
          </button>
          <button className="btn btn-sm btn-primary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
