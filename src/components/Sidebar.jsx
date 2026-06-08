import React from 'react';
import { Type, Layout as LayoutIcon, Image as ImageIcon } from 'lucide-react';
import { TYPES } from '../utils/Types';

function SidebarBtn({ icon, label, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="btn sidebar-btn d-flex align-items-center gap-3 p-3 rounded-4"
    >
      {icon} 
      <span className="btn-label fw-bold small text-uppercase">{label}</span>
    </button>
  );
}

export default function Sidebar({ onAdd, darkMode }) {
  return (
    <div className={`sidebar-container p-4 border-end ${darkMode ? "bg-dark border-secondary text-white" : "bg-light"}`}>
      <h6 className="text-uppercase small fw-bold text-muted mb-4 d-none d-md-block">
        Components
      </h6>
  
      <div className="sidebar-grid">
        <SidebarBtn
          icon={<Type size={18} />}
          label="Heading"
          onClick={() => onAdd(TYPES.HEADER)}
        />
  
        <SidebarBtn
          icon={<LayoutIcon size={18} />}
          label="Paragraph"
          onClick={() => onAdd(TYPES.TEXT)}
        />
  
        <SidebarBtn
          icon={<ImageIcon size={18} />}
          label="Image"
          onClick={() => onAdd(TYPES.IMAGE)}
        />
      </div>
  
      <div className="mt-auto p-3 rounded-4 border border-secondary bg-black bg-opacity-10 text-center d-none d-md-block">
        <div className="d-flex align-items-center justify-content-center gap-2 text-success">
          <div
            className="bg-success rounded-circle"
            style={{ width: "8px", height: "8px", boxShadow: "0 0 5px #198754" }}
          />
          <span className="small fw-bold">Live Sync Active</span>
        </div>
      </div>
    </div>
  );
}