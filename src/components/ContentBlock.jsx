import React from 'react';
import { GripVertical, Trash2, Image as ImageIcon } from 'lucide-react';
import { TYPES } from '../utils/Types';

export default function ContentBlock({ block, index, onUpdate, onDelete, onDragStart, onDragOver, onDragEnd, isDragging }) {
  return (
    <div 
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDragEnd={onDragEnd}
      className={`card mb-3 mb-md-4 border-0 shadow-sm position-relative ${isDragging ? 'card-dragging' : ''}`}
      style={{ transition: 'transform 0.2s, opacity 0.2s' }}
    >
      {/* Control Handles */}
      <div className="position-absolute top-0 end-0 d-flex gap-1 p-2 bg-transparent opacity-0-hover group-hover-visible" style={{ zIndex: 10 }}>
        <div className="btn btn-sm btn-light border shadow-sm p-1.5 cursor-grab d-flex align-items-center"><GripVertical size={14}/></div>
        <button className="btn btn-sm btn-outline-danger bg-white shadow-sm p-1.5 d-flex align-items-center" onClick={() => onDelete(block.id)}><Trash2 size={14}/></button>
      </div>

      <div className="card-body p-3 p-md-4">
        {block.type === TYPES.HEADER && (
          <input 
            draggable
            onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="form-control form-control-lg border-0 bg-transparent fw-bold fs-2 p-0 shadow-none text-body pe-5"
            value={block.content}
            onChange={(e) => onUpdate(block.id, e.target.value)}
          />
        )}

        {block.type === TYPES.TEXT && (
          <textarea 
            draggable
            onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="form-control border-0 bg-transparent p-0 fs-5 text-secondary shadow-none pe-5"
            rows="3"
            value={block.content}
            onChange={(e) => onUpdate(block.id, e.target.value)}
            style={{ resize: 'none' }}
          />
        )}

        {block.type === TYPES.IMAGE && (
          <div className="d-flex flex-column align-items-center pt-2">
            <div className="builder-image-container rounded-4 overflow-hidden shadow-sm mb-3 border border-secondary border-opacity-25">
              <img src={block.content} className="w-100 h-100" style={{ objectFit: 'cover' }} alt="Content" />
            </div>
            <div className="input-group input-group-sm w-100" style={{ maxWidth: '400px' }} draggable onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              <span className="input-group-text bg-transparent border-0 text-muted"><ImageIcon size={12}/></span>
              <input 
                className="form-control form-control-sm border-0 bg-light bg-opacity-10 text-primary font-monospace rounded-3"
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