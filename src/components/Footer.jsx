import React, { useState } from 'react';
import AdminPanel from './AdminPanel';

const Footer = () => {
    const [showAdmin, setShowAdmin] = useState(false);

    return (
        <>
            <footer style={{
                background: '#050A18',
                padding: '2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                marginTop: 'auto'
            }}>
                <p style={{ color: '#888', marginBottom: '0.5rem' }}>
                    &copy; {new Date().getFullYear()} Teyvat Services. 與 HoYoverse 無關。
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a href="#" style={{ color: '#888', fontSize: '0.9rem' }}>隱私權政策</a>
                    <a href="#" style={{ color: '#888', fontSize: '0.9rem' }}>服務條款</a>
                    <button
                        onClick={() => setShowAdmin(true)}
                        style={{ background: 'none', border: 'none', color: '#333', fontSize: '0.8rem', cursor: 'default' }}
                    >
                        管理員
                    </button>
                </div>
            </footer>
            {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
        </>
    );
};

export default Footer;
