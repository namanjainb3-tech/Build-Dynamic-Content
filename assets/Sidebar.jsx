import { Type, Layout as LayoutIcon, Image as ImageIcon } from 'lucide-react';
import { TYPES } from './Types';

function SidebarBtn({ icon, label, onClick }) {
  return (
    <button onClick={onClick} className="btn btn-outline-primary border-2 d-flex align-items-center gap-3 p-3 rounded-4 transition-all w-100">
      {icon} <span className="fw-bold small text-uppercase tracking-wider">{label}</span>
    </button>
  );
}

export default function Sidebar({ onAdd, darkMode }) {
  return (
    <div className={`p-4 border-end d-flex flex-column ${darkMode ? 'bg-dark border-secondary text-white' : 'bg-light'}`} style={{ width: '280px' }}>
      <h6 className="text-uppercase small fw-bold text-muted mb-4">Components</h6>
      <div className="d-grid gap-3 mb-4">
        <SidebarBtn icon={<Type size={18}/>} label="Heading" onClick={() => onAdd(TYPES.HEADER)} />
        <SidebarBtn icon={<LayoutIcon size={18}/>} label="Paragraph" onClick={() => onAdd(TYPES.TEXT)} />
        <SidebarBtn icon={<ImageIcon size={18}/>} label="Image Card" onClick={() => onAdd(TYPES.IMAGE)} />
      </div>
      
      <div className="mt-auto p-3 rounded-4 border border-secondary bg-black bg-opacity-10 text-center">
        <div className="d-flex align-items-center justify-content-center gap-2 mb-1 text-success">
          <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px', boxShadow: '0 0 5px #198754' }}></div>
          <span className="small fw-bold">Live Sync</span>
        </div>
      </div>
    </div>
  );
}