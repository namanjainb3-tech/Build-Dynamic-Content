import { GripVertical, Trash2, Image as ImageIcon } from 'lucide-react';
import { TYPES } from './Types';

export default function ContentBlock({ block, index, onUpdate, onDelete, onDragStart, onDragOver, onDragEnd, isDragging }) {
  return (
    <div 
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDragEnd={onDragEnd}
      className="card mb-4 border-0 shadow-lg position-relative"
      style={{ opacity: isDragging ? 0.3 : 1, transition: 'all 0.2s' }}
    >
      {/* Control Handles */}
      <div className="position-absolute start-0 top-50 translate-middle-x d-flex flex-column gap-2 ms-n3" style={{zIndex: 10}}>
        <div className="btn btn-sm btn-dark border shadow-sm cursor-move p-2"><GripVertical size={14}/></div>
        <button className="btn btn-sm btn-danger shadow-sm p-2" onClick={() => onDelete(block.id)}><Trash2 size={14}/></button>
      </div>

      <div className="card-body p-4 ms-3">
        {block.type === TYPES.HEADER && (
          <input 
            className="form-control form-control-lg border-0 bg-transparent fw-bold fs-2 p-0 shadow-none"
            value={block.content}
            onChange={(e) => onUpdate(block.id, e.target.value)}
          />
        )}

        {block.type === TYPES.TEXT && (
          <textarea 
            className="form-control border-0 bg-transparent p-0 fs-5 text-secondary shadow-none"
            rows="3"
            value={block.content}
            onChange={(e) => onUpdate(block.id, e.target.value)}
          />
        )}

        {block.type === TYPES.IMAGE && (
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-4 overflow-hidden shadow-sm mb-3 border border-secondary border-opacity-25" 
                 style={{ maxWidth: '450px', maxHeight: '300px' }}>
              <img src={block.content} className="w-100 h-100" style={{ objectFit: 'cover' }} alt="Content" />
            </div>
            <div className="input-group input-group-sm" style={{ maxWidth: '400px' }}>
              <span className="input-group-text bg-transparent border-0 text-muted"><ImageIcon size={12}/></span>
              <input 
                className="form-control form-control-sm border-0 bg-light bg-opacity-10 text-primary font-monospace"
                value={block.content}
                onChange={(e) => onUpdate(block.id, e.target.value)}
                style={{ fontSize: '11px' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}