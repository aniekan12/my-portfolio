import React, { useEffect, useState } from 'react';

const CURSOR_SIZE = 32;
const TEXT_OFFSET_X = 40;
const TEXT_OFFSET_Y = 0;

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
        }}>
            {/* Circle */}
            <div
                style={{
                    position: 'absolute',
                    left: position.x - CURSOR_SIZE / 2,
                    top: position.y - CURSOR_SIZE / 2,
                    width: CURSOR_SIZE,
                    height: CURSOR_SIZE,
                    borderRadius: '50%',
                    background: 'rgba(251, 191, 36, 0.8)',
                    border: '2px solid #92400e',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'background 0.2s',
                    pointerEvents: 'none',
                }}
            />
            {/* Text */}
            <span
                style={{
                    position: 'absolute',
                    left: position.x + TEXT_OFFSET_X,
                    top: position.y + TEXT_OFFSET_Y,
                    color: '#92400e',
                    fontWeight: 700,
                    fontSize: 16,
                    background: 'rgba(255,255,255,0.85)',
                    borderRadius: 8,
                    padding: '2px 10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    fontFamily: 'inherit',
                }}
            >
                i good no be small
            </span>
        </div>
    );
};

export default CustomCursor; 