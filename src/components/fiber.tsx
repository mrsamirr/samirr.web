'use client';

import { getFiberFromHostInstance } from 'bippy';
import { useEffect, useState } from 'react';

export default function Fiber() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredFiber, setHoveredFiber] = useState<any>(null);
  useEffect(() => {
    setIsEnabled(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !isEnabled) return;

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const parent = target.parentElement;
      parent?.classList.add('highlight');
      setPos({ x: e.clientX, y: e.clientY });
      const fiberNode = getFiberFromHostInstance(target);
      setHoveredFiber(fiberNode);
    }

    function handleMouseOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const parent = target.parentElement;
      parent?.classList.remove('highlight');
      setHoveredFiber(null);
    }

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full text-white pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs">
        Press Ctrl+D to disable
      </div>
      {hoveredFiber ? (
        <div className="bg-black/90 p-4 rounded-lg max-w-xs pointer-events-auto">
          <div className="text-sm font-mono">
            <div className="font-bold">Fiber Info:</div>
            <div>Tag: {hoveredFiber.elementType}</div>
            <div>Class: {hoveredFiber.pendingProps.className || 'none'}</div>
            <div>
              Text:{' '}
              {typeof hoveredFiber.pendingProps.children === 'string'
                ? hoveredFiber.pendingProps.children.slice(0, 50)
                : 'none'}
            </div>
            <div>tag: {hoveredFiber.tag}</div>
            <div>elementType: {String(hoveredFiber.elementType)}</div>
            <div>type: {String(hoveredFiber.type)}</div>
            <div>mode: {hoveredFiber.mode}</div>
            <div>key: {hoveredFiber.key || 'none'}</div>
          </div>
        </div>
      ) : (
        <div className="text-sm opacity-50">Hover over an element</div>
      )}
    </div>
  );
}