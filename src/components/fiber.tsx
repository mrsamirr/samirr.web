'use client';

import { getFiberFromHostInstance } from 'bippy';
import { useEffect, useState } from 'react';

export default function Fiber() {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredFiber, setHoveredFiber] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      
      if (target.closest('[data-fiber-inspector]')) {
        return;
      }

      setPos({ x: e.clientX + 15, y: e.clientY + 15 });
      
      try {
        const fiberNode = getFiberFromHostInstance(target);
        setHoveredFiber(fiberNode);
      } catch (error) {
        setHoveredFiber(null);
      }
    }

    function handleMouseOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      
      if (e.relatedTarget && (e.relatedTarget as HTMLElement).closest('[data-fiber-inspector]')) {
        return;
      }
      
      setHoveredFiber(null);
    }

    function handleMouseMove(e: MouseEvent) {
      if (hoveredFiber) {
        setPos({ x: e.clientX + 15, y: e.clientY + 15 });
      }
    }

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredFiber]);

  return (
    <>
      {hoveredFiber && (
        <div
          data-fiber-inspector
          className="fixed bg-black/80 p-4 rounded-lg max-w-xs text-white text-sm font-mono z-[9999] pointer-events-none"
          style={{
            left: Math.min(pos.x, window.innerWidth - 350),
            top: Math.min(pos.y, window.innerHeight - 300),
          }}
        >
          <div className="font-bold">Fiber Info:</div>
          <div>Tag: {hoveredFiber.elementType}</div>
          <div>Class: {hoveredFiber.pendingProps?.className || 'none'}</div>
          <div>
            Text:{' '}
            {typeof hoveredFiber.pendingProps?.children === 'string'
              ? hoveredFiber.pendingProps.children.slice(0, 50)
              : 'none'}
          </div>
          <div>tag: {hoveredFiber.tag}</div>
          <div>elementType: {String(hoveredFiber.elementType)}</div>
          <div>type: {String(hoveredFiber.type)}</div>
          <div>mode: {hoveredFiber.mode}</div>
          <div>key: {hoveredFiber.key || 'none'}</div>
        </div>
      )}
    </>
  );
}